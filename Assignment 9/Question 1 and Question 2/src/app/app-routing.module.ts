import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'home', component:AppComponent},
  {path:'books', component:BooksComponent},
  {path:'technologies',component:TechnologiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
