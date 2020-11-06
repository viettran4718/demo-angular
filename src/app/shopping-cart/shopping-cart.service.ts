import { Injectable } from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  promotionCode: string;
  discount: number;

  constructor() {
  }

  getSubtotal(items: Product[]) {
    let result = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < items.length; i++) {
      result += items[i].price * items[i].quantity;
    }
    return result;
  }

  getTax(items: Product[]) {
    return this.getSubtotal(items) * 0.1;
  }

  getFinalPrice(items: Product[]) {
    const result = this.getSubtotal(items) + this.getTax(items);
    if (!this.discount || this.discount === 0) {
      return result;
    } else {
      const a = result - result * this.discount / 100;
      return a;
    }
  }

  getTotalItems(items: Product[]) {
    let result = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < items.length; i++) {
      result += items[i].quantity;
    }
    return result;
  }

  delete(items: Product[], item: Product) {
    const isConfirm = confirm('Xác nhận xóa bản ghi!');

    if (!isConfirm) {
      return;
    } else {
      for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
          const index = items.indexOf(item);
          if (index > -1) {
            items.splice(index, 1);
          }
        }
      }
    }
  }

  applyPromotionCode() {
    if (this.discount) {
      if (confirm('Xác nhận thay đổi mã giảm giá ')) {
        this.changeDiscount();
      }
    } else {
      this.changeDiscount();
    }

  }

  private changeDiscount() {
    if (this.promotionCode === 'VIETTRANDEPTRAI' || this.promotionCode === 'Việt Trần đẹp trai') {
      this.discount = 50;
    } else if (this.promotionCode === '20081997') {
      this.discount = 100;
    } else {
      this.discount = 0;
      alert('Mã giảm giá không đúng. Vui lòng liên hệ "Việt Trần đẹp trai" để lấy mã');
    }
  }
}
