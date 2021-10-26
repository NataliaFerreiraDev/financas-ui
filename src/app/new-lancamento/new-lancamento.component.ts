import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lancamento',
  templateUrl: './new-lancamento.component.html',
  styleUrls: ['./new-lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  @Output() aoSalvar = new EventEmitter<any>();

  valorLancamento: number = 0;
  tipoLancamento: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  salvarLancamento() {
    console.log("Lançamento Salvo com sucesso!");
    const lancamentoEmitir = {valorLancamento: this.valorLancamento, tipoLancamento: this.tipoLancamento};
    this.aoSalvar.emit(lancamentoEmitir);
    this.limparCampos();
  }

  limparCampos(){
    this.valorLancamento = 0;
    this.tipoLancamento = "";
  }


}
