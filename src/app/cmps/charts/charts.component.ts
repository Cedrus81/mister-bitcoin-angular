import { Component, Input, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { ChartData } from 'src/app/models/chartData.model';
@Component({
  selector: 'line-chart',
  templateUrl: './charts.component.html',
  styleUrls: [ './charts.component.scss' ]
})
export class LineChartComponent {
  private newLabel? = 'New label';
  displayedData!: ChartConfiguration['data']
  constructor() {
    Chart.register(Annotation)
  }
  @Input() marketPrices!: ChartData
  ngOnInit() {
    this.displayedData = {
      datasets: [{
        label: 'Market Prices',
        data: this.marketPrices.data,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },],
      labels:['Dec. 05','Dec. 06','Dec. 07','Dec. 08','Dec. 09','Dec. 10','Dec. 11','Dec. 12','Dec. 13','Dec. 14','Dec. 15','Dec. 16','Dec. 17','Dec. 18','Dec. 19']
      // labels: [this.marketPrices.labels],
    }
    console.log('marketPrices:',this.displayedData);


  }
  hardCodedLabels():string[]{
    const labels:string[] = []
    for(let i=0; i<25; i++){
      labels.unshift('Dec', `${i}`.padStart(2,'1'))
    }
    return labels
  }
  
//  lineChartData: ChartConfiguration['data'] = {
//     datasets: [
      // {
      //   data: this.marketPrices.data,
      //   label: 'Market Prices',
      //   backgroundColor: 'rgba(148,159,177,0.2)',
      //   borderColor: 'rgba(148,159,177,1)',
      //   pointBackgroundColor: 'rgba(148,159,177,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      //   fill: 'origin',
      // },
      // {
      //   data: [ 28, 48, 40, 19, 86, 27, 90 ],
      //   label: 'Series B',
      //   backgroundColor: 'rgba(77,83,96,0.2)',
      //   borderColor: 'rgba(77,83,96,1)',
      //   pointBackgroundColor: 'rgba(77,83,96,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(77,83,96,1)',
      //   fill: 'origin',
      // },
      // {
      //   data: [ 180, 480, 770, 90, 1000, 270, 400 ],
      //   label: 'Series C',
      //   yAxisID: 'y1',
      //   backgroundColor: 'rgba(255,0,0,0.3)',
      //   borderColor: 'red',
      //   pointBackgroundColor: 'rgba(148,159,177,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      //   fill: 'origin',
      // }
    // ],
    // labels: this.marketPrices ? this.marketPrices.labels : []
    // labels: ['a', 'b', 'c', 'd', 'e', 'f']
  // };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
        {
          position: 'left',
          grid: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            color: 'red'
          }
        },
      // y1: {
      //   position: 'right',
        
      // }
    },

    // plugins: {
    //   legend: { display: true },
    //   annotation: {
    //     annotations: [
    //       {
    //         type: 'line',
    //         scaleID: 'x',
    //         value: 'March',
    //         borderColor: 'orange',
    //         borderWidth: 2,
    //         label: {
    //           display: true,
    //           position: 'center',
    //           color: 'orange',
    //           content: 'LineAnno',
    //           font: {
    //             weight: 'bold'
    //           }
    //         }
    //       },
    //     ],
    //   }
    // }
  }

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    // for (let i = 0; i < this.lineChartData.datasets.length; i++) {
    //   for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
    //     this.lineChartData.datasets[i].data[j] = LineChartComponent.generateNumber(i);
    //   }
    // }
    // this.chart?.update();
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    // this.lineChartData.datasets.forEach((x, i) => {
    //   const num = LineChartComponent.generateNumber(i);
    //   x.data.push(num);
    // });
    // this.lineChartData?.labels?.push(`Label ${ this.lineChartData.labels.length }`);

    // this.chart?.update();
  }

  public changeColor(): void {
    // this.lineChartData.datasets[2].borderColor = 'green';
    // this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    // this.chart?.update();
  }

  public changeLabel(): void {
    // const tmp = this.newLabel;
    // this.newLabel = this.lineChartData.datasets[2].label;
    // this.lineChartData.datasets[2].label = tmp;

    // this.chart?.update();
  }
}