import { LancamentoService } from './services/lancamento.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'financas';

  constructor(private service: LancamentoService){

  }

  salvar($event: any){
    this.service.adicionarLancamento($event);

  }
}
