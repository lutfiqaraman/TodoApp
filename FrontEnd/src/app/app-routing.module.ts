import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Navigation Component
import { NavbarComponent } from './components/navbar/navbar.component';

// Footer Component
import { FooterComponent } from './components/footer/footer.component';

// Home Component
import { HomeComponent } from './components/home/home.component';

// Todo Component
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todos/todo/todo.component';
import { TodolistComponent } from './components/todos/todolist/todolist.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todos', component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  NavbarComponent,
  HomeComponent,
  FooterComponent,
  TodosComponent,
  TodoComponent,
  TodolistComponent
];
