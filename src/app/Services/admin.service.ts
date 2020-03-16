import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = "http://127.0.0.1:8000/api"
  constructor(
    private http:HttpClient
  ) { }
  add_admin(form){
   return  this.http.post(`${this.url}/create_admin`,form) 
  }
  get_admin(){
    return  this.http.get(`${this.url}/get_admin`) 
  }
  add_categorie(form){
    return this.http.post(`${this.url}/createCategory`,form)
  }
  add_product(form){
    return this.http.post(`${this.url}/createProduct`,form)
  }
  get_product(){
    return this.http.get(`${this.url}/get_products`)
  }
  get_categorie(){
    return this.http.get(`${this.url}/categories`)
  }
  
  update_categorie(id,form){
     return this.http.post(`${this.url}/updateCategorie/${id}`,form) 
  }
  delete_categorie(id){
    return this.http.delete(`${this.url}/deleteCategorie/${id}`) 
 }
 update_product(id,form){
  return this.http.post(`${this.url}/updateProduct/${id}`,form) 
}
delete_product(id){
 return this.http.delete(`${this.url}/deleteProduct/${id}`) 
}
update_admin(id,form){
  return this.http.post(`${this.url}/update_admin/${id}`,form)  
}
delete_admin(id){
  return this.http.delete(`${this.url}/deleteAdmin/${id}`)  
}
isAdmin(email){
  return this.http.get(`${this.url}/isAdmin/${email}`)
}
which_categorie(name){
return this.http.get(`${this.url}/which_categorie/${name}`);
}
notify_quantite(){
  return this.http.get(`${this.url}/product_quantite`);
}
count_notify(){
  return this.http.get(`${this.url}/product_quantite_count`);
}
send_to_admin(){
return this.http.get(`${this.url}/send_notify_admin/souhailkafiani2@gmail.com`);

}

  
}
