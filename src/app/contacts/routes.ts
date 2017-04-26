import {Routes} from '@angular/router';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {CreateEditContactComponent} from './create-edit-contact/create-edit-contact.component';
import {Contacts} from './contacts';

export const routes: Routes = [
  {
    path: 'contacts',
    component: Contacts,
    children: [
      {path: '', component: ContactsListComponent},
      {path: 'new', component: CreateEditContactComponent},
      {path: ':id', component: CreateEditContactComponent}
    ]
  }
];
