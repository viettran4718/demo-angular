import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Board} from './Board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  board1: Board = {
    title: 'Todo',
    items: [
      'Todo 1',
      'Todo 2',
      'Todo 3',
      'Todo 4'
    ],
    typing: ''
  };
  board2: Board = {
    title: 'Doing',
    items: [
      'Doing 1',
      'Doing 2',
    ],
    typing: ''
  };
  board3: Board = {
    title: 'Done',
    items: [
      'Done 1',
      'Done 2',
      'Done 3',
      'Done 4',
      'Done 5'
    ],
    typing: ''
  };

  boards: Board [];

  boardPlus: string;

  constructor() {
    this.boards = [this.board1, this.board2, this.board3];
  }

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

  addItemInBoard(board) {
    // tslint:disable-next-line:no-unused-expression
    if (board.typing) {
      board.items.push(board.typing);
      board.typing = '';
    }
  }

  addBoard() {
    if (this.boardPlus) {
      const board = new Board();
      board.title = this.boardPlus;
      board.items = [];
      board.typing = '';
      this.boards.push(board);
    }
    this.boardPlus = '';
  }

  deleteBoard(board: Board) {
    const index = this.boards.indexOf(board);
    if (index > 0) {
      this.boards.splice(index);
    }
  }

  // addTodoItem() {
  //   if (this.todoInputItem) {
  //     this.todo.push(this.todoInputItem);
  //   }
  //   this.todoInputItem = '';
  // }
  //
  // addDoingItem() {
  //   if (this.doingInputItem) {
  //     this.doing.push(this.doingInputItem);
  //   }
  //   this.doingInputItem = '';
  // }
  //
  // addDoneItem() {
  //   if (this.doneInputItem) {
  //     this.done.push(this.doneInputItem);
  //   }
  //   this.doneInputItem = '';
  // }
}
