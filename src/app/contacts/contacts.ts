import {Component} from '@angular/core';





@Component({
  selector: 'contacts',
  template: `
    <div><router-outlet></router-outlet></div>
  `,
  styles: ['div{padding: 15px}']
})
export class Contacts {

}
