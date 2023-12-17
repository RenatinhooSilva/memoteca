import { Router } from '@angular/router';
import { Pensamento } from '../../Interface/pensamento';
import { PensamentoService } from './../../service/pensamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private pensamentoService: PensamentoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.pensamentoService.criar(this.pensamento).subscribe(()=> {
      this.router.navigate(['/listarPensamento'])
    })

  }

  cancelarPensamento() {
    alert('Pensamento cancelado')
  }
}
