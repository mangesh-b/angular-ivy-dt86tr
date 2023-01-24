import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDynamicFormModule } from 'material-dynamic-form';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Template1Component } from './template1.component';
import { IntroductionComponent } from './introduction.component';

const routes: Routes = [
  { path: '', redirectTo: 'introduction', pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'template1', component: Template1Component },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialDynamicFormModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent, Template1Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
