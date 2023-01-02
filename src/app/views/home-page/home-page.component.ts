import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Observable, Subscription } from 'rxjs';
import { ChartData } from 'src/app/models/chartData.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePage{
  constructor(private bitcoinService: BitcoinService, private userService: UserService) {}
  
  marketPrices!:ChartData | null
  user$!: Observable<User>

  async ngOnInit(): Promise<void> {
    this.marketPrices = await this.bitcoinService.getMarketPrices()
    this.userService.getUser()
    this.user$ = this.userService.loggedInUser$
  }



    


}

