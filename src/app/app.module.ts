import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { standardCalculatorComponent } from './standard-calculator/standard-calculator.component';
import { ScintificCalculatorComponent } from './scintific-calculator/scintific-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    standardCalculatorComponent,
    ScintificCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
