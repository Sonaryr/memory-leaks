import { Component, OnInit } from '@angular/core';
import {MyBackendService} from '../../my-backend.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss']
})
export class PercentageComponent implements OnInit {

  single$: Observable<any[]>;
  view: any[] = [500, 400];
  legend: boolean = true;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private myBackendService: MyBackendService) { }

  ngOnInit(): void {
    this.single$ = this.myBackendService.businessMetrics1$.pipe(
      map(values => {
        return [{
          name: 'CPU',
          value: values[0]
        }, {
          name: 'RAM',
          value: values[1]
        }];
      })
    );
  }

}
