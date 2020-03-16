import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProductCategorieService {
  private url = "http://127.0.0.1:8000/api"
  constructor(private http:HttpClient) {
    
   }
   get_product(id){
    return this.http.get(`${this.url}/get_product/${id}`);
  }
   get_gome_products(){
    return this.http.get(`${this.url}/products`);
  }
  get_products_by_categorie(id){
    return this.http.get(`${this.url}/which_categorie_by_id/${id}`);
  }
  get_products_like(id,name){
    return this.http.get(`${this.url}/product_like/${id}/${name}`);
  }

}
