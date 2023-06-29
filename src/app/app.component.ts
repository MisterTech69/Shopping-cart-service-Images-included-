import { Component, OnInit } from '@angular/core';
import { MyMainService } from './main.service';
import { MySharedService } from './shared.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  products: any = [];

  constructor(
    private myMainService: MyMainService,
    private mySharedService: MySharedService
  ) { }

  ngOnInit() {
    // Get all product list on component init
    this.myMainService.getProducts().subscribe(data => {
      this.products = data.products;
    });
  } 

}
