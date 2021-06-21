import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactSubject: Subject<any> = new Subject();
  contactObservable = this.contactSubject.asObservable();

  contacts: any;
  constructor() {

    //getting all contacts
    let keys = Object.keys(localStorage);
    let count = keys.length;

    this.contacts = []
    while (count--) {
      this.contacts.push(this.getContact(keys[count]));
    }

  }

  saveContact(data: any) {
    let name = data.contactname;
    localStorage.setItem(name, JSON.stringify(data));

    this.contactSubject.next(data);
  }

  getContact(name: string) {
    let res = localStorage.getItem(name);
    let data = (res !== null) ? JSON.parse(res) : null;

    return data;
  }

  getAllContacts() {
    return [...this.contacts];
  }

  nameExists(name: string): boolean {
    let person = localStorage.getItem(name);
    return (person !== null);
  }
}
