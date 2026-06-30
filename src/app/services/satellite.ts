import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Satellite } from '../models/satellite';

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {

  private readonly http = inject(HttpClient);

  getSatellites(): Observable<Satellite[]> {

    return this.http.get<Satellite[]>('/data/satellites.json');

  }

}