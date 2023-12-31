import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Log } from '@angular/core/testing/src/logger';

@Injectable()
export class MySharedService {
  // Local variable which stores
  public cartItems = [];
  public products = new Subject();

  getProducts(): Observable<any> {
    console.log('this.cartItems :', this.cartItems);
    return this.products.asObservable();
  }

  // Add single product to the cart
  addProductToCart(product) {
    this.cartItems.push(product);
    console.log('aa', this.cartItems);
    this.products.next(this.cartItems);
  }

  // Remove single product from the cart
  removeProductFromCart(productId) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    // Update Observable value
    this.products.next(this.cartItems);
  }

  // Remove all the items added to the cart
  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  // Calculate total price on item added to the cart
  getTotalPrice() {
    let total = 0;

    this.cartItems.map((item) => {
      total += item.price;
    });

    return total;
  }
}
