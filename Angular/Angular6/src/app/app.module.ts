import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';

const item: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'show', component: ShowComponent },
  { path: '', component: ShowComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(item)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
