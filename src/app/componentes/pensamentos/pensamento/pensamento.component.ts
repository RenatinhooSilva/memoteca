import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../../Interface/pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Jesus',
    autoria: 'Renatinho',
    modelo: 'modelo3',
  };

  constructor() {}

  ngOnInit(): void {}

  larguraPensamentos(): string {
    if (this.pensamento.conteudo.length > 200) {
      return 'pensamento-g';
    } else {
      return 'pensamento-p';
    }
  }
}
