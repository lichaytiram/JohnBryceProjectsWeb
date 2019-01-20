import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { AllComponent } from './all/all.component';

const appRoot: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'all', component: AllComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoot)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
