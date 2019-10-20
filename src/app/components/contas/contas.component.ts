import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';

import {ContaService} from '../../services/conta.service';
import {CadastroContaComponent} from './cadastro-conta/cadastro-conta.component';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss']
})
export class ContasComponent implements AfterViewInit {

  colunas = ['nome', 'valorOriginal', 'valorCorrigido', 'dataVencimento', 'dataPagamento'];
  dataSource = new MatTableDataSource();
  quantidadeDeRegistros = 0;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(public contaService: ContaService,
              private dialog: MatDialog) { }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.atualizaListagem();
    });
    this.atualizaListagem();
  }

  private atualizaListagem() {
    this.contaService.buscar(this.paginator.pageIndex, this.paginator.pageSize).subscribe( (pagina) => {
      this.quantidadeDeRegistros = pagina.totalElements;
      this.dataSource.data = pagina.content;
    });
  }

  public cadastrarConta() {
    return this.dialog.open(CadastroContaComponent, {minWidth: '50%' , maxHeight: '75vh',
      position: {top: '4%'}});
  }

}
