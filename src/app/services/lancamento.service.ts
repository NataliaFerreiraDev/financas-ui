import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private listaLancamento: any [];

  constructor() {
    this.listaLancamento = [];
  }

  get lancamentos(){
    return this.listaLancamento;
  }

  adicionarLancamento(lancamento: any){
    this.addDados(lancamento);
    this.lancamentos.push(lancamento);
  }

  private addDados(lancamento: any){
    lancamento.data = new Date();
  }

}
