import { Component } from '@angular/core';
import {product} from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping Cart';
  selectedProduct;
  /*array of product object info */ 
  products:Array<product> =[
    new product('Nokia', 100, 45),
    new product('Samsung', 200, 15),
    new product('MotoG', 245, 25),
    
  ];
/*Display the selected product info on btn click */
  onViewClick(prod){
  this.selectedProduct=prod;
  }
  }