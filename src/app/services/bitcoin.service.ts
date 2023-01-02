import { Injectable } from '@angular/core';
import { ChartData } from 'src/app/models/chartData.model';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor() { }
  async getMarketPrices(){
    const chartData:ChartData = {data: [], labels: []}
    const marketPrices = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`).then(res => res.data.values.slice(0, 25))
    marketPrices.forEach((d: {  x: number, y: number }) => {
      chartData.data.push(d.y)
      chartData.labels.push(this.getDate(d.x as number))
    })
    return chartData
  }
  getDate(x: number): string {
    return new Date(x * 1000).toLocaleDateString('en-US', { month: 'short', day: '2-digit' })
  }
}
