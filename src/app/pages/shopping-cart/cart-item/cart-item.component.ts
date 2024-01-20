import {ChangeDetectionStrategy, Component, effect, Input, input, OnInit} from '@angular/core';
import {CartItem} from "../../../core/models/cart-item.model";
import {CartService} from "../../../core/services/cart.service";
import {CommonModule} from "@angular/common";

/**
 *
 * @author ozay tunctan
 *
 **/

@Component({
  selector: 'cart-item',
  templateUrl: 'cart-item.component.html',
  styleUrl: 'cart-item.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CartItemComponent implements OnInit {

  item = input.required<CartItem>({alias: 'value'});

  constructor(private cartService: CartService) {
    effect(() => {
      console.log(`cart item value:${JSON.stringify(this.item())}`);
    });
  }

  ngOnInit() {
  }

  removeItem() {
    this.cartService.removeItem(this.item());
  }

}
