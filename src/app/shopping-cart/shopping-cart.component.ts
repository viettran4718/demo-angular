import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: Product[] = [
    {
      img: 'assets/img/thuy.jpg',
      name: 'Item 1',
      description: 'Description for product item number 1',
      price: 50000,
      quantity: 1,
    },
    {
      img: 'assets/img/thuy.jpg',
      name: 'Item 2',
      description: 'Description for product item number 2',
      price: 20000,
      quantity: 2,
    },
    {
      img: 'assets/img/viet.jpg',
      name: 'Item 3',
      description: 'Description for product item number 3',
      price: 6000000,
      quantity: 3,
    },
  ];

  totalItems = 3;
  subtotal = 31;

  getSubtotal(items: Product[]) {
    let result = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < items.length; i++) {
      result += items[i].price * items[i].quantity;
    }
    return result;
  }

  getTotalItems(items: Product[]) {
    let result = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < items.length; i++) {
      result += items[i].quantity;
    }
    return result;
  }

  delete(item) {
    const isConfirm = confirm('Xác nhận xóa bản ghi!');

    if (!isConfirm) {
      return;
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] === item) {
          const index = this.items.indexOf(item);
          if (index > -1) {
            this.items.splice(index, 1);
          }
        }
      }
    }
  }


  constructor() {
    this.totalItems = this.getTotalItems(this.items);
    this.subtotal = this.getSubtotal(this.items);
  }

  ngOnInit(): void {
  }


}
