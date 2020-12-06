
// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// components
import { AppComponent } from './app.component';
import { ListagemPropostasComponent } from './listagem-propostas/listagem-propostas.component';
import { ListagemContatosComponent } from './listagem-contatos/listagem-contatos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ManutencaoPropostas } from './manutencao-propostas/manutencao-propostas.component';
// services
import { PropostaService } from './service/proposta.service';
import { ContatoService } from './service/contato.service';
import { ManutencaoContatosComponent } from './manutencao-contatos/manutencao-contatos.component';

import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    ListagemPropostasComponent,
    ListagemContatosComponent,
    ManutencaoPropostas,
    NavbarComponent,
    ManutencaoContatosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [ContatoService, PropostaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
