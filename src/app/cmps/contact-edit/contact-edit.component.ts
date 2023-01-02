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
    const {name,phone,email} = this.contact
    console.log('contact: ', this.contact);
    this.form = this.fb.group({
      name: [name,[Validators.required]],
      phone: [phone,[Validators.required]],
      email: [email,[Validators.required]]
    })
    console.log('form: ', this.form.value)
}

  onSubmit(form: object) {
    // console.log('this.first:', this.first)
    // console.log('form.value:', form.value)
    console.log(form)
    this.contactService.saveContact(form as Contact)
    this.router.navigateByUrl('/contact')
}

  onBack() {
    this.router.navigateByUrl('/contact')
  }
}
