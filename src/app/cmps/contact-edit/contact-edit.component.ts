import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
 import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact!: Contact
  subscription!: Subscription
  form!: FormGroup
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]]
  })
   }
  
  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = contact
      console.log(contact)
      this.form.patchValue(this.contact)
  })
}

  onSubmit() {
    const contact: Contact = { ...this.contact, ...this.form.value }
        this.contactService.saveContact(contact)
        this.router.navigateByUrl('/contact')
  } 

  onBack() {
    this.router.navigateByUrl('/contact')
  }
}
