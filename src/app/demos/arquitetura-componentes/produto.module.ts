import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe/produto-card-detalhe.component';

import { ProdutoRoutingModule } from "./produto.route";

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';
import { ProdutoCountComponent } from './componentes/produto-count/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoService } from "./services/produto.service";

registerLocaleData(localePt);

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent,
        ProdutoAppComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    providers: [
        ProdutoService
    ],
    exports: []
})
export class ProdutoModule { }