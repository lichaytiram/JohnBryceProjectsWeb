import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';

const root: Routes = [
  { path: 'show-json', component: ShowComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(root)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
