import { Component, OnInit } from '@angular/core';
import {MyBackendService} from '../../my-backend.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor( private myBackendService: MyBackendService) { }

  ngOnInit(): void {
    this.myBackendService.businessMetrics3$.subscribe(values => {
      this.single = [{
        name: 'Party 1',
        value: values[0]
      },{
        name: 'Party 2',
        value: values[1]
      },{
        name: 'Party 3',
        value: values[2]
      },{
        name: 'Party 4',
        value: values[3]
      }]
    })
  }

}
