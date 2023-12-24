import {environment} from "../../../environments/environment";
import {Observable, retry, timeout} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Capital} from "../models/capital.model";

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
  }

  getCapitals(): Observable<Capital[]> {
    return this.http.get<Capital[]>(`${environment.capitals_url}/capitals_full.json`).pipe(timeout(5_000), retry(3));
  }
}
