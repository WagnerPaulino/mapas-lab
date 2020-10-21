import { Injectable } from '@angular/core';
import { Map, map, tileLayer, marker } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map: Map;

  constructor() {}

  initMap(elementId: string) {
    this.map = map(elementId, {
      center: [39.8282, -98.5795],
      zoom: 3
    });
    const tiles = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    this.map.on('dblclick', ({ latlng }: any) => {
      marker([latlng.lat, latlng.lng]).addTo(this.map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    });
  }
}
