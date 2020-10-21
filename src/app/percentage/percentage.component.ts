import {Component, OnDestroy, OnInit} from '@angular/core';
import {MyBackendService} from '../../my-backend.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss']
})
export class PercentageComponent implements OnInit, OnDestroy {

  single: any[];
  view: any[] = [500, 400];
  legend: boolean = true;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  private destroy$ = new Subject();

  constructor(private myBackendService: MyBackendService) { }

  ngOnInit(): void {
    this.myBackendService.businessMetrics1$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(values => {
        this.single = [{
          name: 'CPU',
          value: values[0]
        }, {
          name: 'RAM',
          value: values[1]
        }]
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}
