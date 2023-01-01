import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  constructor(private contactService: ContactService) { }

  // contacts$!: Observable<Contact[] | null>
  contacts!: Contact[]
  subscription!: Subscription

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
  })
    // this.contacts$ = this.contactService.contacts$
   }
}
