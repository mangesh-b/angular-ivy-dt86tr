import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDynamicFormModule } from 'material-dynamic-form';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction.component';
import { Template1Component } from './template1.component';
import { Template2Component } from './template2.component';
import { Template3Component } from './template3.component';

const routes: Routes = [
  { path: '', redirectTo: 'introduction', pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'template1', component: Template1Component },
  { path: 'template2', component: Template2Component },
  { path: 'template3', component: Template3Component },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialDynamicFormModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent, 
    IntroductionComponent, 
    Template1Component, 
    Template2Component, 
    Template3Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
