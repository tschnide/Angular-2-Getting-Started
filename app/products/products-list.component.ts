import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service'; 
 
@Component({
    moduleId: module.id, //allows relative paths for templateUrl and styleUrls see below
    templateUrl: 'product-list.component.html', // relative 
    styleUrls: ['product-list.component.css'] // relative 
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string ;
    errorMessage: string;

    products: IProduct[];

    constructor(private _productService: ProductService) {

    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    /* ******************************************************************
    *  On initialization this sets _productService (refer to constructor)
    *  getProducts is getProducts() from products.service.
    *  Basically this makes sure that the component is loaded before the
    *  service gets used.
    *********************************************************************/
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);
                }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message; 
    }


}