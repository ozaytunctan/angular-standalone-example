import {ChangeDetectionStrategy, Component, effect, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {CartService} from "../../core/services/cart.service";
import {CartItemComponent} from "./cart-item/cart-item.component";

@Component({
  selector: 'tx-shopping-cart',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CartItemComponent,
    CommonModule
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit {

  itemList = this.cartService.itemList;

  totalPrice = this.cartService.totalPrice;

  constructor(private cartService: CartService) {
    effect(()=>{
      console.log(`Cart total price:${this.totalPrice()}`);
    })
  }


  ngOnInit() {

  }



}
