import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/service/map.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupMapaFormComponent } from '../popup-mapa-form/popup-mapa-form.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit, AfterViewInit {

  constructor(private mapService: MapService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mapService.initMap('map');
    this.mapService.onDbClick.subscribe(({ lat, lng }) => {
      this.dialog.open(PopupMapaFormComponent, {
        data: { lat, lng },
        disableClose: true
      })
    })
  }

}
