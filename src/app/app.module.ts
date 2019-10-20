import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatTableModule
} from '@angular/material';
import { ContasComponent } from './components/contas/contas.component';
import {HttpClientModule} from '@angular/common/http';
import { CadastroContaComponent } from './components/contas/cadastro-conta/cadastro-conta.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContasComponent,
    CadastroContaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  entryComponents: [
    CadastroContaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
