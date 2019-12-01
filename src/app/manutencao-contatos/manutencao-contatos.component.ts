import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from './../service/contato.service';
import { Contato } from '../model/contato.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-manutencao-contatos',
  templateUrl: './manutencao-contatos.component.html',
  styleUrls: ['./manutencao-contatos.component.scss']
})
export class ManutencaoContatosComponent implements OnInit {
  id: string;
  titulo: string = 'Editar';
  contato: Contato = new Contato();
  carregado: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router,private clienteService: ContatoService){

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if ( this.id !== null) {
        this.clienteService.retornarContato(Number.parseInt(this.id, 10))
        .subscribe(clienteRetornado =>{
          console.log(clienteRetornado);
          this.contato = clienteRetornado;
          this.carregado = true;
        });
      } else {
        this.titulo = 'Adicionar';
        this.carregado = true;
      }
    }).unsubscribe();
  }

  voltar() {
    this.router.navigateByUrl(`/clientes`);
  }

  salvar( contato: Contato ) {
    let retorno: any;
    let msgRetorno: string;
    if ( this.id ) {
      retorno = this.clienteService.editarContato(this.contato, this.contato.id);
      msgRetorno = 'Cliente editado com sucesso.';
    } else {
      retorno = this.clienteService.adicionarContato(this.contato);
      msgRetorno = 'Cliente cadastrado com sucesso.';
    }
    retorno.subscribe(result => {
        this.contato = result;
        alert(`${msgRetorno}`);
      },
      error => {
        console.log(error);
        alert('Falha ao salvar o contato.');
      });
  }
}
