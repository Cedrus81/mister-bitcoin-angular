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
  ) { }
  
  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(({contact}) => 
    {this.contact = contact || this.contactService.getEmptyContact() as Contact}
    )
    const {name,phone,email,_id} = this.contact
    this.form = this.fb.group({
      _id,
      name: [name,[Validators.required]],
      phone: [phone,[Validators.required]],
      email: [email,[Validators.required]]
    })
}

  onSubmit(form: object) {
    this.contactService.saveContact(form as Contact)
    this.router.navigateByUrl('/contact')
}

  onBack() {
    this.router.navigateByUrl('/contact')
  }
}
