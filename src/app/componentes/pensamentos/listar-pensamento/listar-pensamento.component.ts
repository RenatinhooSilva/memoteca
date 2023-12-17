import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../../Interface/pensamento';
import { PensamentoService } from '../../service/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento [] = [];

  constructor(
    private readonly pensamentoService: PensamentoService
  ) {}

  ngOnInit(): void {
    this.pensamentoService.listar().subscribe((resp) => {
      this.listaPensamentos = resp})
  }

}
