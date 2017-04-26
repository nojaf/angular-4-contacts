import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact-service';
import {Observable} from 'rxjs/Observable';
import {IContact} from '../models';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts$: Observable<IContact[]>;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts$ = this.contactService.getAll();
  }

}
