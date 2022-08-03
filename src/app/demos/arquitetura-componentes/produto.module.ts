import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe/produto-card-detalhe.component';

import { ProdutoRoutingModule } from "./produto.route";

import { ProdutoCountComponent } from './componentes/produto-count/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoService } from "./services/produto.service";
import { ProdutoResolveService } from "./services/produto-resolve.service";


import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from "@angular/common";
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
        ProdutoService,
        ProdutoResolveService
    ],
    exports: []
})
export class ProdutoModule { }