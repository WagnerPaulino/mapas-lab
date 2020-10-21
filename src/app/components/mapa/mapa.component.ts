import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/service/map.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit, AfterViewInit {

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mapService.initMap('map');
  }

}
