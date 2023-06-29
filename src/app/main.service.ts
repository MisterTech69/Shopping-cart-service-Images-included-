import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyMainService {

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get('../assets/data/products.json').map(response => response.json());
  }

}