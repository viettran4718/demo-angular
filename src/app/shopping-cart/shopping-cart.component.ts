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
      price: 5.99,
      quantity: 0,
    },
    {
      img: 'assets/img/thuy.jpg',
      name: 'Item 1',
      description: 'Description for product item number 1',
      price: 5.99,
      quantity: 0,
    },
    {
      img: '',
      name: 'Item 2',
      description: 'Description for product item number 2',
      price: 9.99,
      quantity: 0,
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
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
          this.items.splice(index, 1);
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
