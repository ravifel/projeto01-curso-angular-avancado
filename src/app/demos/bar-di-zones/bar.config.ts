import { InjectionToken } from "@angular/core"

export interface BarUnidadeConfig {
    unidadeId: number,
    unidadeToken: string
}

//declaração de um injection token que vai funcionar em forma de constante
export const BAR_UNIDADE_CONFIG = new InjectionToken<BarUnidadeConfig>('BAR_UNIDADE_CONFIG');