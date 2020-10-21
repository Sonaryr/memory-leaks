import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { PercentageComponent } from './percentage/percentage.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    PercentageComponent,
    BarComponent,
    PieComponent,
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
