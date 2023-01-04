import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) { }
  
  onLogin(action:string, username:string):void {
    if (action === 'login') {
      try{
        this.userService.login(username)
        this.router.navigateByUrl('/')
      }catch(e){
        console.log(`could not login:`, e)
      }
    } else{
      this.userService.signup(username)
      this.router.navigateByUrl('/')
    }

  }
}
