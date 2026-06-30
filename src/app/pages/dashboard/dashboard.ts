import { Component, inject, signal } from '@angular/core';

import { Navbar } from '../../components/navbar/navbar';
import { SearchBar } from '../../components/search-bar/search-bar';
import { SatelliteList } from '../../components/satellite-list/satellite-list';

import { SatelliteService } from '../../services/satellite';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, SearchBar, SatelliteList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private satelliteService = inject(SatelliteService);

  satellites = signal(this.satelliteService.getSatellites());
}
