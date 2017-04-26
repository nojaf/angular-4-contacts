import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {IContact} from './models';


@Injectable()
export class ContactService {
  constructor(private http: Http) {

  }

  getAll(): Observable<IContact[]> {
    return this.http
      .get('http://localhost:3000/rest/contact')
      .map(this.mapJson);
  }

  get(id: number): Observable<IContact> {
    return this.http
      .get(`http://localhost:3000/rest/contact/${id}`)
      .map(this.mapJson);
  }

  private mapJson(response: Response) {
    return response.json();
  }

  update(contact: IContact): Observable<any> {
    return this.http
      .put(`http://localhost:3000/rest/contact/${contact.id}`, contact);
  }

  create(contact: IContact) {
    return this.http
      .post(`http://localhost:3000/rest/contact`, contact);
  }
}
