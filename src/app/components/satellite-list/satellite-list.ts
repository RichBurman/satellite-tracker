import { Component, input } from '@angular/core';
import { Satellite } from '../../models/satellite';

@Component({
  selector: 'app-satellite-list',
  imports: [],
  templateUrl: './satellite-list.html',
  styleUrl: './satellite-list.css',
})
export class SatelliteList {
  satellites = input<Satellite[]>([]);
}
