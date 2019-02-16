import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyBasketComponent } from './my-basket/my-basket.component';

const root: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my_basket', component: MyBasketComponent },
  { path: '', component: HomeComponent },
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyBasketComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(root)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
