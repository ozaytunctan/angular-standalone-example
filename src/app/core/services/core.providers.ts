import {CartService} from "./cart.service";
import {LocalStorageService} from "./local-storage.service";
import {AppService} from "./app.service";
import {GeoService} from "./geo.service";

export const coreProviders = [
  CartService,
  LocalStorageService,
  AppService,
  GeoService
]
