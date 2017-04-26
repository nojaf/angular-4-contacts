import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {Contacts} from './contacts';
import {RouterModule} from '@angular/router';


import {routes} from './routes';
import {ContactService} from './contact-service';
import {CreateEditContactComponent} from './create-edit-contact/create-edit-contact.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Contacts,
    ContactsListComponent,
    CreateEditContactComponent
  ],
  providers: [
    ContactService
  ]
})
export class ContactsModule { }
