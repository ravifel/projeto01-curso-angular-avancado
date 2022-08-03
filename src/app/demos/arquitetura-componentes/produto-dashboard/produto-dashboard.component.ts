import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoCardDetalheComponent } from '../componentes/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../componentes/produto-count/produto-count.component';
import { Produto } from '../models/produto';
0
@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[];

  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;

  @ViewChildren(ProdutoCardDetalheComponent) botoes: QueryList<ProdutoCardDetalheComponent>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
    console.log(this.route.snapshot.data['teste']);
  }

  ngAfterViewInit(): void {
    console.log('Objeto do Contador: ', this.contador.produtos);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(
      () => {
        alert('clicou no texto!');
        return;
      }
    );

    console.log(this.botoes);
    this.botoes.forEach(
      p => {
        console.log(p.produto);
      }
    );
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }

}
