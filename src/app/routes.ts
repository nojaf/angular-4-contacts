import {Routes} from '@angular/router';
import {Contacts} from './contacts/contacts';




export const appRoutes: Routes = [

  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];
