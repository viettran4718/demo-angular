import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  @Input()
  public item: Product;

  @Output()
  itemClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteItemClick() {
    // console.log(this.item);
    this.itemClicked.emit(this.item);
    // return this.item;
  }

}
