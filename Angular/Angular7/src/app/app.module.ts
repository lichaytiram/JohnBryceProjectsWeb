import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { ShowListComponent } from './show-list/show-list.component';

const root: Routes = [
  { path: 'add', component: AddListComponent },
  { path: 'show', component: ShowListComponent },
  { path: '', component: ShowListComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(root)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
