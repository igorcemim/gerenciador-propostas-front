import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoService } from './../service/contato.service';
import { Contato } from '../model/contato.model';

@Component({
  selector: 'app-listagem-contatos',
  templateUrl: './listagem-contatos.component.html',
  styleUrls: ['./listagem-contatos.component.scss']
})
export class ListagemContatosComponent implements OnInit {
  contatos: Array<Contato>;
  isEdit: boolean = false;
  carregado: boolean = false;

  constructor(private contatoService: ContatoService, private router: Router) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.contatoService.listarContatos()
      .subscribe(dados => {
        this.contatos = dados;
        this.carregado = !this.carregado;
      });
  }

  editar(contato: Contato) {
    this.router.navigateByUrl(`clientes/detalhes/${contato.id}`);
  }

  remover(id: number) {
    if ( confirm(`Deseja remover o Contato (${ id })`) ) {
      this.contatoService.removerContato(id)
      .subscribe(dados => {
          this.carregado = !this.carregado;
          this.listar();
      });
    } else {
      return;
    }
  }

  adicionar() {
    this.router.navigateByUrl(`clientes/adicionar`);
  }

}
