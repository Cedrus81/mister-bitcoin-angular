import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  constructor(private contactService: ContactService) { }
  ngOnInit(): void {
    this.contactService.loadContacts({term:''}) 
   }
}
