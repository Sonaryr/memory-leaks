import { Component, OnInit } from '@angular/core';
import {MyBackendService} from '../../my-backend.service';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss']
})
export class PercentageComponent implements OnInit {

  single: any[];
  view: any[] = [500, 400];
  legend: boolean = true;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private myBackendService: MyBackendService) { }

  ngOnInit(): void {
    this.myBackendService.businessMetrics1$.subscribe(values => {
      this.single = [{
        name: 'CPU',
        value: values[0]
      }, {
        name: 'RAM',
        value: values[1]
      }]
    });
  }

}
