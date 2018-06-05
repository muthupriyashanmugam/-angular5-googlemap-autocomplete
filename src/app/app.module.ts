import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {MatFormFieldModule,MatInputModule} from '@angular/material';

import { GoogleplaceDirective } from '../app/directive/googlemap.directive';
@NgModule({
  declarations: [
    AppComponent,GoogleplaceDirective
  ],
  imports: [
    BrowserModule,FormsModule,
    MatFormFieldModule,MatInputModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
