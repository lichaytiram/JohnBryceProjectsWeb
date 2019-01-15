import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const my_app: Routes = [
  { path: 'app-insert', component: InsertComponent }
]


import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { InsertComponent } from './insert/insert.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    InsertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(my_app)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
