import { Component, OnInit } from '@angular/core';
import { BarService, BarServiceMock } from './bar.service';

@Component({
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  styles: [],
  providers: [
    { provide: BarService, useClass: BarService }
  ]
})
export class BarDiZonesComponent implements OnInit {

  barBebida1: string;

  constructor(private BarService: BarService) { }

  ngOnInit() {
    this.barBebida1 = this.BarService.obterBebidas();
  }

}
