import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactInputComponent } from './components/contact-input/contact-input.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInputComponent,
    ContactTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
