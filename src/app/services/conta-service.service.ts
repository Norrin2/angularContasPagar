import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Pagina} from '../models/pagina';
import {Conta} from '../models/conta';

@Injectable({
  providedIn: 'root'
})
export class ContaServiceService {

  private url = `http://localhost:8080/contas`;

  constructor(private http: HttpClient) { }

  buscar(numeroDaPagina = 1, tamanhoDaPagina = 10): Observable<Pagina> {
    const params = new HttpParams()
      .set('numeroDaPagina', numeroDaPagina.toString())
      .set('tamanhoDaPagina', tamanhoDaPagina.toString());
    return this.http.get(`${this.url}`, { params})
      .pipe(map(response => response as Pagina));
  }

  salvar(conta: Conta) {
    return this.http.post<any>(`${this.url}`, conta);
  }

}
