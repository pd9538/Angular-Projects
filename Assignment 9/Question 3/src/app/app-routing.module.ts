import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {path:'books', component:BooksComponent},
  {path:'technologies',component:TechnologiesComponent},
  {path:'',component:BooksComponent},
  {path:'**',component:DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
