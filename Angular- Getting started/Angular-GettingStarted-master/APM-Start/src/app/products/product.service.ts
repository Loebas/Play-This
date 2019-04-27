import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class ProductService{

  /**
   *
   */
  constructor(private http: HttpClient) {
    

  }
getProduct(): IProduct[]{
    return
    [{
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://images.homedepot-static.com/productImages/4743a3de-32c6-452b-8886-9af7ae7c8322/svn/yard-carts-70019-64_1000.jpg"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/71tTWyypTKL._SX425_.jpg"
      }]
    ;
}
}