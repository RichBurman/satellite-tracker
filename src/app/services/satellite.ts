import { Injectable } from '@angular/core';
import { Satellite } from '../models/satellite';


@Injectable({
  providedIn: 'root'
})
export class SatelliteService {


private satellites: Satellite[] = [

{
id:1,
name:'Hubble Space Telescope',
status:'Online',
altitude:540,
speed:27600,
country:'USA',
launchDate:'1990'
},


{
id:2,
name:'International Space Station',
status:'Online',
altitude:408,
speed:27500,
country:'International',
launchDate:'1998'
},


{
id:3,
name:'Landsat 8',
status:'Offline',
altitude:705,
speed:27000,
country:'USA',
launchDate:'2013'
}

];


getSatellites(){

return this.satellites;

}


}