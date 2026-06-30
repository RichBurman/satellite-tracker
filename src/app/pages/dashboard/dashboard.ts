import { Component, computed, inject, signal } from '@angular/core';

import { Navbar } from '../../components/navbar/navbar';
import { SearchBar } from '../../components/search-bar/search-bar';
import { SatelliteList } from '../../components/satellite-list/satellite-list';

import { SatelliteService } from '../../services/satellite';
import { Satellite } from '../../models/satellite';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, SearchBar, SatelliteList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private satelliteService = inject(SatelliteService);

  satellites = signal<Satellite[]>([]);

  loading = signal(true);

  error = signal('');

  searchTerm = signal('');

  ngOnInit() {
    this.satelliteService.getSatellites().then(data=>{
      this.satellites.set(data);
      this.loading.set(false);
    }).catch(error => {
      this.error.set('Failed to load satellites.');
      this.loading.set(false);
    });
  }

  filteredSatellites = computed(() => {
    return this.satellites().filter((satellite) =>
      satellite.name.toLowerCase().includes(this.searchTerm().toLowerCase())
    );
  });

  onSearch(value:string) {
    this.searchTerm.set(value);
  }
}
