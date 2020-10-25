import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-mapa-form',
  templateUrl: './popup-mapa-form.component.html',
  styleUrls: ['./popup-mapa-form.component.scss']
})
export class PopupMapaFormComponent implements OnInit {

  public message: string;

  constructor(public dialogRef: MatDialogRef<PopupMapaFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  submit() {
    
    this.dialogRef.close();
  }

}
