import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SegueCursorComponent } from './segue-cursor/segue-cursor.component';

@NgModule({
  declarations: [
    AppComponent,
    SegueCursorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
