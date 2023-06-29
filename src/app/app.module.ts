import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// COMPONENTS
// =======================
import { HeaderComponent } from './components/header.component';
import { ProductListComponent } from './components/product-list.component';
import { CartComponent } from './components/cart.component';

// SERVICES
// =======================
import { MyMainService } from './main.service';
import { MySharedService } from './shared.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    CartComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    MyMainService,
    MySharedService
  ]
})
export class AppModule { } 
