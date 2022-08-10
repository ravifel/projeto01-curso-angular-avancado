import { Inject, Injectable, Injector } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from "./bar.config";

export function BarFactory(http: HttpClient, Injector: Injector) {
    return new BarService(http, Injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable()
export class BarService {

    constructor(
        private http: HttpClient,
        @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig
    ) { }

    public obterUnidade(): string {
        return 'Unidade ID: ' + this.config.unidadeId + ' Token: ' + this.config.unidadeToken
    }

    obterBebidas(): string {
        return 'Bebidas';
    }

    obterPorcoes(): string {
        return 'Porções';
    }

    obterRefeicoes(): string {
        return 'Refeições';
    }
}

export class BarServiceMock {

    obterBebidas(): string {
        return 'Mock';
    }

    obterPorcoes(): string {
        return 'Mock';
    }

    obterRefeicoes(): string {
        return 'Mock';
    }
}

export abstract class BebidaServiceAbstract {
    obterBebidas: () => string;
}