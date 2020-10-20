import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaComponent } from './components/mapa/mapa.component';

const routes: Routes = [
  { path: '', component: MapaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
