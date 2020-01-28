import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentAreaComponent } from './Components/current-area/current-area.component';
import { ApproachingAreaComponent } from './Components/approaching-area/approaching-area.component';
import { MapComponent } from './Components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentAreaComponent,
    ApproachingAreaComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
