import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { BarDiZonesComponent } from "./bar-di-zones.component";
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from "./bar.config";


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        BarDiZonesComponent
    ],
    exports: [
        BarDiZonesComponent
    ]
})
export class BarModule {
    static forRoot(config: BarUnidadeConfig): ModuleWithProviders {
        return {
            ngModule: BarModule,
            providers: [
                { provide: 'ConfigManualUnidade', useValue: config },
                { provide: BAR_UNIDADE_CONFIG, useValue: config }
            ]
        }
    }

    static forChild() {

    }
}