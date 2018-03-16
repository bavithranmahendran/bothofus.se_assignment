import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';



import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ServiceProviderService } from "./service-provider.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,  
    MatTabsModule,
    HttpModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDJF6tNoP3T-Nd4kC4u3hWeYg37kVPNDp0'})
    
  ],
  providers: [ServiceProviderService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
