import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {CartService} from "../../core/services/cart.service";
import {CartItem} from "../../core/models/cart-item.model";

@Component({
  selector: 'tx-shopping-cart',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {

  itemList = this.cartService.itemList;

  totalPrice = this.cartService.totalPrice;

  constructor(private cartService: CartService) {
  }


  ngOnInit() {

  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

}
