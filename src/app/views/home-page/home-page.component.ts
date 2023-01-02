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
  marketPrices!:ChartData
  user$!: Observable<User>
  isChartData:boolean = false
  subscription!: Subscription
  constructor(private bitcoinService: BitcoinService, private userService: UserService) {
    // this.marketPrices = this.bitcoinService.chartData$

  }



  async ngOnInit(): Promise<void> {
    await this.bitcoinService.getMarketPrices()
    this.userService.getUser()
    this.user$ = this.userService.loggedInUser$
    this.subscription = this.bitcoinService.chartData$.subscribe(data => {
      this.marketPrices = data
  })
    this.isChartData = true
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


    


}

