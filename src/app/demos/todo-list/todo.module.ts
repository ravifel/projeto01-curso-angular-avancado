import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './componentes/todo-list/todo-list.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { TasksIniciadasComponent } from './componentes/tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './componentes/tasks-finalizadas/tasks-finalizadas.component';
import { TaskService } from './todo.service';
import { Store } from './todo.store';



@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TasksComponent,
    TasksIniciadasComponent,
    TasksFinalizadasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TaskService,
    Store
  ],
  exports: [
    TodoComponent,
    TodoListComponent,
    TasksComponent,
    TasksIniciadasComponent,
    TasksFinalizadasComponent
  ]
})
export class TodoModule { }
