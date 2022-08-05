import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BarDiZonesComponent } from "./bar-di-zones.component";


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
export class BarModule { }