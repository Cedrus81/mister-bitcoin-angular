import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router:Router, private userService: UserService, private contactService: ContactService) { }
  subscription!: Subscription
  contact: Contact | undefined
  user$!: Observable<User>


  async ngOnInit(): Promise<void>{
    this.subscription = this.route.data.subscribe(data => this.contact = data['contact'])
    this.user$ = this.userService.loggedInUser$
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  
  contactTransactions(): void {
    const transactions: object[] = []
  }
  
  
  onRemove(id:string): void {
    this.contactService.deleteContact(id)
    this.onBack()
  }
  
  onSubmit(form: NgForm): void {
    if(!this.contact) return
    this.userService.addTransaction(this.contact ,form.value.amount)
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }





  timeSince(date:number) {

    let seconds = Math.floor((Date.now() - date) / 1000);
    // 31536000 seconds per year
    let interval = seconds / 31536000;
    if (interval <= 0) return 'Just now'
    if (interval > 1) {
        return Math.floor(interval) + ' years ago';
    }
    // per month
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + ' months ago';
    }
    // per days
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + ' days ago';
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + ' hours ago';
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + ' minutes ago';
    }
    return Math.floor(seconds) + ' seconds ago';
}

}
