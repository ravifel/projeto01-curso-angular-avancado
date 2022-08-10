import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarModule } from './bar.module';
import { BarFactory, BarService, BarServiceMock, BebidaServiceAbstract } from './bar.service';

@Component({
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  styles: [],
  providers: [
    //{ provide: BarService, useClass: BarService },
    {
      provide: BarService, useFactory: BarFactory,
      deps: [
        HttpClient,
        Injector
      ]
    },
    { provide: BebidaServiceAbstract, useExisting: BarService }
  ]
})
export class BarDiZonesComponent implements OnInit {

  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  barBebida1: string;
  barBebida2: string;
  dadosUnidade: string;

  constructor(
    private BarService: BarService,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private BebidaServiceAbstract: BebidaServiceAbstract
  ) { }

  ngOnInit() {
    this.barBebida1 = this.BarService.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;

    this.dadosUnidade = this.BarService.obterUnidade();

    this.barBebida2 = this.BebidaServiceAbstract.obterBebidas();
  }

}
