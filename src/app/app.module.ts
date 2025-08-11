import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvEnglishComponent } from './cv-english/cv-english.component';
import { TiengVietComponent } from './tieng-viet/tieng-viet.component';

@NgModule({
  declarations: [
    AppComponent,
    CvEnglishComponent,
    TiengVietComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
