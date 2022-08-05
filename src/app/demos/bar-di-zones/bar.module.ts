import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BarDiZonesComponent } from "./bar-di-zones.component";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BarDiZonesComponent
    ],
    exports: [
        BarDiZonesComponent
    ]
})
export class BarModule { }