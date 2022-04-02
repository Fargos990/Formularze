import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsTemplateComponent } from './forms-template/forms-template.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {path: 'formsTemplate', component: FormsTemplateComponent}, 
  {path: 'formsReactive', component: FormsReactiveComponent}, 
  {path: 'showData', component: ShowDataComponent}, 
  {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormsTemplateComponent,
    FormsReactiveComponent,
    ShowDataComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
