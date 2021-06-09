import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Output()todoDelete : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("Delete btn trigger");
  
  }

}
