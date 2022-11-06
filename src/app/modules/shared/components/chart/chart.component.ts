import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @Input('type') type: any = 'bar';
  @ViewChild('chart') chart!: ElementRef;
  ref!: Chart;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let datasets: any[] = [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
  }];

  switch (this.type) {
    case 'bubble':
      datasets = [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
      break;
  
    default:
      break;
  }

    this.ref = new Chart(this.chart.nativeElement, {
      type: this.type,
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: datasets
      },
      options: {
          showScale: false,
          // scales: {
          //   x: {
          //     grid: {
          //       display: this.type !== 'pie'
          //     },
          //     ticks: {
          //       display: this.type !== 'pie'
          //     }
          //   },
          //   y: {
          //       beginAtZero: true,
          //       grid: {
          //         display: this.type !== 'pie'
          //       },
          //       ticks: {
          //         display: this.type !== 'pie'
          //       }
          //   }
          // }
      },
    });
  }

}
