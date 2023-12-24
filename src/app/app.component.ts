import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {AppService} from "./core/services/app.service";
import {GeoService} from "./core/services/geo.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'tx-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, LeafletModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,AfterViewInit{

  title = 'angular17-guides-client';
  constructor(private appService: AppService, private geoService: GeoService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.geoService.init('map');
  }


}
