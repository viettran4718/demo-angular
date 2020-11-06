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

  validate() {
    const reg = new RegExp('^[0-9]$');
    if (reg.test(this.item.quantity + '')) {
      let numberToString: string = this.item.quantity + '';
      numberToString = numberToString.replace('-', '');
      console.log(numberToString);
      numberToString = numberToString.replace('e', '');
      console.log(numberToString);
      if (numberToString) {
        this.item.quantity = Number(numberToString);
      }
    }

  }

}
