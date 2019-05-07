import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';

const root: Routes = [
  { path: 'login', component: UserComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'administrator', component: AdministratorComponent },
  { path: '', component: UserComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdministratorComponent,
    CustomerComponent,
    CompanyComponent
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
