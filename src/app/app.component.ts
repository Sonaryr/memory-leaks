import {Component, OnInit, ViewChild} from '@angular/core';
import {interval, pipe} from 'rxjs';
import {LineChartComponent} from '@swimlane/ngx-charts';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'subscription-management';

  chartToDisplay = 'PC';
  possibleCharts = ['PC', 'Sales', 'Elections'];
  simulateUsage = false;

  @ViewChild(LineChartComponent, {static: false}) chart: LineChartComponent;

  now = new Date();
  multi: any[] = [{
    name: 'Used JS Heap',
    series: [{
      name: this.dateToTime(this.now),
      value: (window.performance as any).memory.usedJSHeapSize/ 1048576
    }]
  }, {
    name: 'Total JS Heap',
    series: [{
      name: this.dateToTime(this.now),
      value: (window.performance as any).memory.totalJSHeapSize / 1048576
    }]
  }];
  view: any[] = [1000, 400];

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
      this.multi[0].series.push({
        "name": this.dateToTime(now),
        "value": (window.performance as any).memory.usedJSHeapSize / 1048576
      });
      this.multi[1].series.push({
        "name": this.dateToTime(now),
        "value": (window.performance as any).memory.totalJSHeapSize / 1048576
      });
      this.multi = [...this.multi];
      this.chart.update();
    });

    interval(200)
      .pipe(
        filter(() => this.simulateUsage)
      )
      .subscribe(() => {
        var item = this.possibleCharts[Math.floor(Math.random() * this.possibleCharts.length)];
        this.chartToDisplay = item;
      });
  }

  private dateToTime(date: Date): string {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
  }
}
