import { Component, OnInit } from '@angular/core';

import{ Todo} from '../../Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  constructor() { 
    this.todos=[
      {
        srNo:1,
        title:"R & d on JWT",
        desc:"how to use web tokensd in application ",
        active:true,
      },
      {
        srNo:2,
        title:"Angular event handling",
        desc:"we hangle the event by using (click)='functionName'",
        active:true,
      },
      {
        srNo:3,
        title:"(ngSubmit)",
        desc:"this event use when we submit the form",
        active:false,
      }
    ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
      console.log(todo);
      let index:any=this.todos?.indexOf(todo);
      this.todos?.splice(index,1);
      
  }

  todoAdd(todo:Todo){
   console.log(todo);
   
    this.todos?.push(todo);
    
  }

}
