import { Component, Input, OnInit } from '@angular/core';
import { LancamentoService } from '../services/lancamento.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  lancamentos: any[] = [];

  constructor(private service: LancamentoService) { }

  ngOnInit(): void {
    this.lancamentos = this.service.lancamentos;
  }

}
