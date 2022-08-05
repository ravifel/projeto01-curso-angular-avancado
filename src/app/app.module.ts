import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SobreComponent } from './institucional/sobre/sobre.component';

import { AppRoutingModule } from './app.routes';

import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { FilmesComponent } from './demos/arquitetura-componentes/pipes/filmes/filmes.component';

import { NgBrazil, TextMask } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';

import { FileSizePipe } from './demos/arquitetura-componentes/pipes/filmes/pipesCustomizados/filesize.pipe';
import { ImageFormaterPipe } from './demos/arquitetura-componentes/pipes/filmes/pipesCustomizados/image.pipe';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from "@angular/common";
import { BarModule } from './demos/bar-di-zones/bar.module';
registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TextMask.TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    AppRoutingModule,
    BarModule
  ],
  providers: [
    AuthGuard,
    CadastroGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
