///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ContactService} from '../contact-service';
import {IContact} from '../models';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-edit-contact',
  templateUrl: './create-edit-contact.component.html',
  styleUrls: ['./create-edit-contact.component.css']
})
export class CreateEditContactComponent implements OnInit, OnDestroy {

  private id: number = null;
  contactForm: FormGroup;

  public get nameClass(): any {
    return {
      'is-success': this.contactForm.controls['name'].valid,
      'is-danger': this.contactForm.controls['name'].dirty &&
      this.contactForm.controls['name'].invalid
    };
  }

  public get emailClass(): any {
    return {
      'is-success': this.contactForm.controls['email'].valid,
      'is-danger': this.contactForm.controls['email'].dirty &&
      this.contactForm.controls['email'].invalid
    };
  }


  private subscription: Subscription;
  public contact: IContact;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router) {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(next => {
      if (next['id']) {
        this.loadContact(next['id']);
      } else {
        this.id = null;
      }
    });
  }

  loadContact(id: number) {
    this.contactService
      .get(id)
      .subscribe(contact => {
        this.id = contact.id;
        this.contactForm.controls['name'].setValue(contact.name);
        this.contactForm.controls['email'].setValue(contact.email);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  saveContact($event: Event): void {
    $event.preventDefault();

    const contact: IContact = {
      id: this.id,
      name: this.contactForm.controls['name'].value,
      email: this.contactForm.controls['email'].value
    };

    const onSuccess = () => {
      this.router.navigateByUrl('/contacts');
    };

    if (contact.id) {
      this.contactService.update(contact).subscribe(onSuccess);
    } else {
      this.contactService.create(contact).subscribe(onSuccess);
    }

  }
}
