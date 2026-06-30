import { Component, input } from '@angular/core';
import { Satellite } from '../../models/satellite';

import { SatelliteCard } from '../satellite-card/satellite-card';

@Component({
  selector: 'app-satellite-list',
  imports: [SatelliteCard],
  templateUrl: './satellite-list.html',
  styleUrl: './satellite-list.css',
})
export class SatelliteList {
  satellites = input<Satellite[]>([]);
}
