import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContasComponent} from './components/contas/contas.component';


const routes: Routes = [
  {
    path: '',
    component: ContasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
