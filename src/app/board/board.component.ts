import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  constructor() {
  }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
  todoInputItem: string;

  doing = [
    'Play game',
    'Play girl',
  ];
  doingInputItem: string;

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  doneInputItem: string;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addTodoItem() {
    if (this.todoInputItem) {
      this.todo.push(this.todoInputItem);
    }
    this.todoInputItem = '';
  }

  addDoingItem() {
    if (this.doingInputItem) {
      this.doing.push(this.doingInputItem);
    }
    this.doingInputItem = '';
  }

  addDoneItem() {
    if (this.doneInputItem) {
      this.done.push(this.doneInputItem);
    }
    this.doneInputItem = '';
  }
}
