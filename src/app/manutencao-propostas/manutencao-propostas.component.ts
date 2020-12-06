import {
  Component,
  OnInit
} from '@angular/core';
import {
  PropostaService
} from '../service/proposta.service';
import {
  Proposta
} from '../model/proposta.model';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  forkJoin, Observable
} from 'rxjs';
import {
  ContatoService
} from '../service/contato.service';
import {
  Contato
} from '../model/contato.model';

@Component({
  selector: 'app-manutencao-propostas',
  templateUrl: './manutencao-propostas.component.html',
  styleUrls: ['./manutencao-propostas.component.scss']
})
export class ManutencaoPropostas implements OnInit {
  id: number;
  titulo: string = 'Editar';
  proposta: Proposta = new Proposta();
  carregado: boolean = false;
  listaClientes: Contato[];
  listaStatus = [{
      "label": "Selecione",
      "valor": null,
    },
    {
      "label": "Em Análise",
      "valor": "EM_ANALISE",
    },
    {
      "label": "Aprovada",
      "valor": "APROVADA",
    },
    {
      "label": "Recusada",
      "valor": "RECUSADA",
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propostaService: PropostaService,
    private clienteService: ContatoService
  ) {}

  inicializar(proposta, contatos) {
    this.titulo = 'Adicionar';
    this.listaClientes = !!contatos ? contatos : this.listaClientes;
    this.proposta = !!proposta ? proposta : this.proposta;
    this.carregado = true;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number.parseInt(params.get('id')) || null;

      if (this.id) {
        return forkJoin({
          proposta: this.retornar(this.id),
          contatos: this.clienteService.listarContatos()
        })
        .subscribe(resultado => this.inicializar(resultado.proposta, resultado.contatos));
      } else {
        return this.clienteService.listarContatos()
        .subscribe(contatos => this.inicializar(null, contatos));
      }
    });
  }

  voltar() {
    this.router.navigateByUrl(`/propostas`);
  }

  retornar(id: number) {
    return this.propostaService.retornar(id);
  }

  salvar(proposta: Proposta) {
    let retorno: any;
    if (this.id) {
      retorno = this.propostaService.editar(this.proposta.id, this.proposta);
    } else {
      retorno = this.propostaService.adicionar(this.proposta);
    }
    retorno.subscribe(resultado => {
        this.proposta = resultado;
        alert('Proposta salva.');
      },
      errorResponse => {
        console.log(errorResponse);
        alert('Falha ao salvar a proposta.');
      });
  }
}
