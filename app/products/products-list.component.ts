import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service'; 
 
@Component({
    selector: 'pm-products',
    moduleId: module.id, //allows relative paths for templateUrl and styleUrls see below
    templateUrl: 'product-list.component.html', // relative 
    styleUrls: ['product-list.component.css'] // relative 
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];

    constructor(private _productService: ProductService) {

    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message; 
    }


}