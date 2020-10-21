import {Component, OnInit, ViewChild} from '@angular/core';
import {interval} from 'rxjs';
import {LineChartComponent} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'subscription-management';

  chartToDisplay = 'PC';
  possibleCharts = ['PC', 'Sales', 'Elections'];

  @ViewChild(LineChartComponent, {static: false}) chart: LineChartComponent;

  now = new Date();
  multi: any[] = [{
    name: 'Used JS Heap',
    series: [{
      name: this.dateToTime(this.now),
      value: window.performance.memory.usedJSHeapSize/ 1048576
    }]
  }, {
    name: 'Total JS Heap',
    series: [{
      name: this.dateToTime(this.now),
      value: window.performance.memory.totalJSHeapSize / 1048576
    }]
  }];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Useage in MB';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25']
  };

  public ngOnInit(): void {

    interval(5000).subscribe(() => {
      const now = new Date();
      console.log('updating...')
      this.multi[0].series.push({
        "name": this.dateToTime(now),
        "value": window.performance.memory.usedJSHeapSize / 1048576
      });
      this.multi[1].series.push({
        "name": this.dateToTime(now),
        "value": window.performance.memory.totalJSHeapSize / 1048576
      });
      this.multi = [...this.multi];
      this.chart.update();
    });

    interval(200).subscribe(() => {
      var item = this.possibleCharts[Math.floor(Math.random() * this.possibleCharts.length)];
      this.chartToDisplay = item;
    })
  }

  private dateToTime(date: Date): string {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
  }
}
