import { Component, Input } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-count',
  templateUrl: './produto-count.component.html',
  styles: []
})
export class ProdutoCountComponent {

  @Input()
  produtos: Produto[];

  constructor() { }

  contadorAtivos(): number {
    if (!this.produtos) {
      return;

    } else {
      return this.produtos.filter((produto: Produto) => produto.ativo).length;
    }
  }


}
