import {computed, Injectable, signal} from "@angular/core";
import {CartItem} from "../models/cart-item.model";


@Injectable()
export class CartService {

  items: CartItem[] = [
    {id:"43578BHVBVD089743575",name: 'Mont', price: 1000.00},
    {id:"478BH56790D089743578",name: 'Gömlek', price: 1500},
    {id:"578B67567VD089743575",name: 'Pantolon', price: 2000}
  ];

  itemList = signal(this.items);
  totalPrice = computed(() => {
      return this.itemList().reduce(
        (acc, curr) => acc + curr.price, 0);
    });
  removeItem(item: CartItem) {
    this.itemList.set(
      this.itemList().filter((i) => i !== item)
    );
  }


}
