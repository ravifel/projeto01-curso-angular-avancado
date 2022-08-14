import { Component, Input } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {

  //recebendo uma lista de tarefas através do @Input()
  @Input()
  list: Task[];

}
