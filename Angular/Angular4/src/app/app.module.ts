import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const my_app: Routes = [
  { path: 'show-page', component: ShowPageComponent },
  { path: 'show-per_page', component: ShowPerPageComponent },
  { path: 'show-total', component: ShowTotalComponent },
  { path: 'show-total-pages', component: ShowTotalPagesComponent },
  {
    path: 'show-data', component: ShowDataComponent, children: [
      { path: 'ID', component: InsertToDataComponent }
    ]
  }
]


import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { ShowPerPageComponent } from './show-per-page/show-per-page.component';
import { ShowTotalComponent } from './show-total/show-total.component';
import { ShowTotalPagesComponent } from './show-total-pages/show-total-pages.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { InsertToDataComponent } from './insert-to-data/insert-to-data.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    ShowPageComponent,
    ShowPerPageComponent,
    ShowTotalComponent,
    ShowTotalPagesComponent,
    InsertToDataComponent,
    ShowDataComponent
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
