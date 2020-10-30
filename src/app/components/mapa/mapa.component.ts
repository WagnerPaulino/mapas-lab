import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/service/map.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupMapaFormComponent } from '../popup-mapa-form/popup-mapa-form.component';
import { latLng, latLngBounds } from 'leaflet';

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
    this.mapService.onClick.subscribe(({ lat, lng }) => {
      this.dialog.open(PopupMapaFormComponent, {
        data: { lat, lng },
        disableClose: true
      }).afterClosed().subscribe(({ message }) => {
        if (message?.trim().length) {
          this.mapService.addPopup({ lat: lat, lng: lng, html: `<p>${message}</p>` })
        }
      })
    })
  }

  addRetangle() {
    var corner1 = latLng(40.712, -74.227)
    var corner2 = latLng(40.774, -74.125)
    var bounds = latLngBounds(corner1, corner2);
    this.mapService.addRetangle(bounds);
  }

}
