import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountCapitalComponent } from './count-capital/count-capital.component';
import { MyaddPipe } from './myadd.pipe';
import { MymultPipe } from './mymult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountCapitalComponent,
    MyaddPipe,
    MymultPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
