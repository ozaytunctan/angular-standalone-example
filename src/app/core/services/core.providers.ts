import {CartService} from "./cart.service";
import {LocalStorageService} from "./local-storage.service";

export const coreProviders = [
  CartService,
  LocalStorageService
]
