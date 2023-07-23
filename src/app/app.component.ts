import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serapp';
  newtodo='';
  todos=['clean car','make website','get bike ready']
  addTodo(){
    this.todos.push(this.newtodo);
    this.newtodo='';
  }
}
