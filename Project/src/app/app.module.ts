import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

const root: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: UserComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(root)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
