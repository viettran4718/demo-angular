import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ShoppingCartService} from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: Product[] = [
    {
      img: 'assets/img/thuy.jpg',
      name: 'Kangaroo',
      description: 'Dùng để ngắm từ xa ',
      price: 50000,
      quantity: 0,
    },
    {
      img: 'assets/img/idol.jpg',
      name: 'Idol Bảo Ngọc',
      description: 'Dùng để ngắm cả từ xa lẫn gần',
      price: 1000000,
      quantity: 0,
    },
    {
      img: 'assets/img/viet.jpg',
      name: 'Author đẹp trai',
      description: 'Quá nhiều tài năng, thích dùng để làm gì cũng được',
      price: 6000000,
      quantity: 0,
    },
  ];

  constructor(public shoppingCartService: ShoppingCartService) {
  }

  getSubtotal(items: Product[]) {

    return this.shoppingCartService.getSubtotal(items);
  }

  getTax(items: Product[]) {
    return this.shoppingCartService.getTax(items);
  }

  getFinalPrice(items: Product[]) {
    return this.shoppingCartService.getFinalPrice(items);
  }

  getTotalItems(items: Product[]) {
    return this.shoppingCartService.getTotalItems(items);
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

  applyPromotionCode() {
    this.shoppingCartService.applyPromotionCode();

  }

  ngOnInit(): void {
  }


}
