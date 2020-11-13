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

  boards: Board [] = [];
  listTask: string [] = [];
  boardPlus: string;

  constructor() {
    this.boards = this.getBoards();
    if (!this.boards || this.boards.length == 0) {
      this.boards = [this.board1, this.board2, this.board3];
    }
    this.updateBoards();
    for (const board of this.boards) {
      this.listTask = this.listTask.concat(board.items);
    }
  }

  getBoards(): Board [] {
    return JSON.parse(localStorage.getItem('board'));
  }

  updateBoards() {
    localStorage.setItem('board', JSON.stringify(this.boards));
    console.log('Updated to local storage');
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
    this.updateBoards();
  }

  addItemInBoard(board) {
    if (board.typing) {
      if (this.listTask.indexOf(board.typing) >= 0) {
        alert('Item is exists');
        return;
      }
      board.items.push(board.typing);
      this.listTask.push(board.typing);
      board.typing = '';
      this.updateBoards();
    }
  }

  addBoard() {
    if (this.boardPlus) {
      const board = new Board();
      board.title = this.boardPlus;
      board.items = [];
      board.typing = '';
      this.boards.push(board);
      this.updateBoards();
    }
    this.boardPlus = '';
  }

  deleteBoard(board: Board) {
    if (confirm('Delete?')) {
      const index = this.boards.indexOf(board);
      if (index >= 0) {
        this.boards.splice(index, 1);
        this.updateBoards();
      }
    }
  }

  deleteItemInBoard(item: string, board: Board) {
    if (confirm('Delete?')) {
      const index = board.items.indexOf(item);
      if (index >= 0) {
        board.items.splice(index, 1);
        this.updateBoards();
      }
    }
  }
}
