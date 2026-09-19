import { Component } from '@angular/core';

import { ProductDetails } from './product-details/product-details';
import { ProductTabs } from './product-tabs/product-tabs';
import { Accessories } from './accessories/accessories';
import { FooterComponent } from './footer/footer';
import { HeaderComponent } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductDetails,
    ProductTabs,
    Accessories,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}