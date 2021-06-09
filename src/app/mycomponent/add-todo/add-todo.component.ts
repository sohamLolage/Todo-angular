import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!:string  ;
  desc!: string ;
  @Output() addtodo : EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
   const todo={
     srNo:10,
     title:this.title,
     desc:this.desc,
     active:true
   }
   this.addtodo.emit(todo);
  }

}
