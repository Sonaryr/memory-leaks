import {Component, OnDestroy, OnInit} from '@angular/core';
import {MyBackendService} from '../../my-backend.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit, OnDestroy {

  single: any[] = [];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'sales';
  showYAxisLabel = true;
  yAxisLabel = 'profit';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  private destroy$ = new Subject();

  constructor( private myBackendService: MyBackendService) { }

  ngOnInit(): void {
    this.myBackendService.businessMetrics2$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(value => {
        this.single = [...this.single, {
          name: 'sales ' + (this.single.length + 1),
          value
        }];
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}
