import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { Choose1Component } from './choose1/choose1.component';
import { Choose2Component } from './choose2/choose2.component';
import { Choose3Component } from './choose3/choose3.component';
import { Choose4Component } from './choose4/choose4.component';
import { Choose5Component } from './choose5/choose5.component';
import { ErrorComponent } from './error/error.component';
import { BuyComponent } from './buy/buy.component';

const appR: Routes = [
  { path: 'choose_1', component: Choose1Component },
  {
    path: 'choose_2', component: Choose2Component,
    children: [
      { path: 'buy', component: BuyComponent }

    ]
  },
  { path: 'choose_3', component: Choose3Component },
  { path: 'choose_4', component: Choose4Component },
  { path: 'choose_5', component: Choose5Component },
  { path: '', component: Choose1Component },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    Choose1Component,
    Choose2Component,
    Choose3Component,
    Choose4Component,
    Choose5Component,
    ErrorComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appR)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
