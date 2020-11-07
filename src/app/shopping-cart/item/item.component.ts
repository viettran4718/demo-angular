import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./../shopping-cart.component.css']
})
export class ItemComponent implements OnInit {


  @Input()
  public item: Product;

  @Output()
  itemClicked = new EventEmitter();

  @ViewChild('quantityInput') quantityInput: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteItemClick() {
    this.itemClicked.emit(this.item);
  }

  validate() {
    if (!Number.isInteger(this.item.quantity)) {
      if (!isNaN(this.item.quantity)) {
        this.item.quantity = 0;
        this.quantityInput.nativeElement.value = 0;
      } else {
        this.item.quantity = Math.floor(this.item.quantity);
      }
    } else if (this.item.quantity < 0) {
      this.item.quantity = -this.item.quantity;
    }
    // console.log(this.valueInput);
    // console.log(!isNaN(this.item.quantity) && this.item.quantity != null);
    // if (!isNaN(this.item.quantity) && this.item.quantity != null) {
    //   debugger;
    //   const reg = new RegExp('^[0-9]$');
    //   if (reg.test(this.item.quantity + '')) {
    //     let numberToString: string = this.item.quantity + '';
    //     numberToString = numberToString.replace('-', '');
    //     console.log(numberToString);
    //     numberToString = numberToString.replace('e', '');
    //     console.log(numberToString);
    //     if (numberToString) {
    //       this.item.quantity = Number(numberToString);
    //     }
    //   }
    // } else {
    //   this.item.quantity = 0;
    // }
    console.log(this.item.quantity);

  }

}
