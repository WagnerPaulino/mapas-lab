import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit, AfterViewInit {

  private map;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    this.map.on('dblclick', ({ latlng }) => {
      console.log(latlng);
      L.marker([latlng.lat, latlng.lng]).addTo(this.map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    });

  }
}
