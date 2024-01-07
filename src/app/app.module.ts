import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ModulesModule } from './modules/modules.module';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    BrowserAnimationsModule,
    // StoreModule.forRoot(
    //   // ActionReducerMap<Reducers
    //   {}, {}
    //   // >)
    //   ),
    // StoreDevtoolsModule.instrument({
    //   name: 'Testing-NgRx',
    //   maxAge: 25,
    //   logOnly: !isDevMode(),
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
