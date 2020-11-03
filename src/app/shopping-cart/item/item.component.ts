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
    this.itemClicked.emit(this.item);
  }

}
