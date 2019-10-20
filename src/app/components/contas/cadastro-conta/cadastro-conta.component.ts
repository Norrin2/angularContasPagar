import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material';

import {Conta} from '../../../models/conta';
import {ContaService} from '../../../services/conta.service';
@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.scss']
})
export class CadastroContaComponent {

  conta = new Conta();
  processando = false;
  constructor(private contaService: ContaService,
              public dialogRef: MatDialogRef<any>) { }

  salvar() {
    if (!this.processando) {
      this.processando = true;
      this.contaService.salvar(this.conta).subscribe( () => {
      this.dialogRef.close();
      },
        ((error) => {
          alert(error.message);
          this.processando = false;
        }));
    }
  }

}
