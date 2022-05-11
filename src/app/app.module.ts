import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {InputOverviewExample} from './input-overview-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
// @ts-ignore
import {MyLibModule} from 'my-lib';

@NgModule({
  declarations: [InputOverviewExample],
  imports: [
    MyLibModule
  ],
  providers: [],
  bootstrap: [InputOverviewExample],
})
export class AppModule {}
