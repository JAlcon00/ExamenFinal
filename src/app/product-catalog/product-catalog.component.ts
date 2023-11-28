import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


export interface IProduct {
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent {
  product: IProduct = { name: '', price: 0, category: '' };
  products: IProduct[] = [];

  nameTouched = false;
  priceTouched = false;
  categoryTouched = false;

  addProduct() {
    this.nameTouched = true;
    this.priceTouched = true;
    this.categoryTouched = true;
    if (this.product.name && this.product.price && this.product.category) {
      this.products.push({ ...this.product });
      this.product = { name: '', price: 0, category: '' }; // Limpiar formulario
      this.nameTouched = false;
      this.priceTouched = false;
      this.categoryTouched = false;
    }
  }
  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }
  clearAllProducts(): void {
    this.products = [];
  }
}

