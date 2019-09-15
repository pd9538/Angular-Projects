import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountCapitalComponent } from './count-capital/count-capital.component';

@NgModule({
  declarations: [
    AppComponent,
    CountCapitalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
