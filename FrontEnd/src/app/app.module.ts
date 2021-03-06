import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// HTTP requests
import { HttpClientModule } from '@angular/common/http';

// Angular Material UI component library
import { MaterialModule } from './angular_material/material.module';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
