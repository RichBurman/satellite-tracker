import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { About } from './pages/about/about';


export const routes: Routes=[


{
path:'',
component:Dashboard
},


{
path:'about',
component:About
}


];