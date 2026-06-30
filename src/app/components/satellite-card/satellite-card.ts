import { Component, input } from '@angular/core';
import { Satellite } from '../../models/satellite';

@Component({
  selector: 'app-satellite-card',
  imports: [],
  templateUrl: './satellite-card.html',
  styleUrl: './satellite-card.css',
})
export class SatelliteCard {
  satellite = input.required<Satellite>();

}
