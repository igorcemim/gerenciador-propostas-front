import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemPropostasComponent } from './listagem-propostas/listagem-propostas.component';
import { ListagemContatosComponent } from './listagem-contatos/listagem-contatos.component';
import { ManutencaoPropostas } from './manutencao-propostas/manutencao-propostas.component';
import { ManutencaoContatosComponent } from './manutencao-contatos/manutencao-contatos.component';

const routes: Routes = [
  {path: '', component: ListagemContatosComponent},
  {path: 'clientes', component: ListagemContatosComponent},
  {path: 'clientes/adicionar', component: ManutencaoContatosComponent},
  {path: 'clientes/detalhes/:id', component: ManutencaoContatosComponent},
  {path: 'propostas', component: ListagemPropostasComponent},
  {path: 'propostas/detalhes/:id', component: ManutencaoPropostas},
  {path: 'propostas/adicionar', component: ManutencaoPropostas},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
