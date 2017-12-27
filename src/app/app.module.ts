import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Module
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { FormComponent } from './views/form/form.component';
import { FormcheckDirective } from './shared/formcheck.directive';

export const routes: Routes = [
  // {
  //   path: '', component: AppComponent
  // },
  { path: 'form', component: FormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormcheckDirective
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routes),
    ButtonsModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
