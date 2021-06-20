import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss']
})
export class ContactTableComponent implements OnInit {

  contacts: any = [];
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getAllContacts();
    this.contactService.contactObservable.subscribe((data) => { 
      this.contacts.push(data);
    });

  }

}
