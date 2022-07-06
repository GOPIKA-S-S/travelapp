import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelRegistrationComponent } from './travel-registration/travel-registration.component';
import { ViewdestinationComponent } from './viewdestination/viewdestination.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelRegistrationComponent,
    ViewdestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
