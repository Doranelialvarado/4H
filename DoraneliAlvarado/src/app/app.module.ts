import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Eje1Component } from './ejercicios/eje1/eje1.component';

@NgModule({
  declarations: [
    AppComponent,
    Eje1Component
  ],
  imports: [
    BrowserModule,
    NgModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
