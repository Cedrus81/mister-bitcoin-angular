import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactList{
  @Input() contacts!: Contact[]
  @Output() onSelect = new EventEmitter<string>()
    @Output() onRemove = new EventEmitter<string>()
}
