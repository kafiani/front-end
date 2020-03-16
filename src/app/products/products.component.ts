import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public form = {
    name:null,
    description:null,
    category:null,
    color:null,
    quantity:null,
    marque:null,
    new_price:null,
    Poids:null,
    promotion:null
  }
  public products :Array<Object> 
  public products_secondaire:Array<Object> 
  constructor(
    private admin:AdminService
  ) { }
public all_ctegories;
  ngOnInit() {
    this.admin.get_product().subscribe(
      (data:Array<object>)=>{
        this.products=data
        this.products_secondaire=data;
      }
    )
    this.admin.get_categorie().subscribe((data:Array<Object>)=>{
      this.all_ctegories=data
      console.log(this.all_ctegories)
    })
  }
  onBlur_update(e){
    let id = e.target.getAttribute('data-id')
    document.querySelectorAll('input[data-val="'+id+'"]').forEach(element=>{
 if(element['name']=='name'){
  this.form.name=element['value']
 }
 if(element['name']=='description'){
  this.form.description=element['value']
 }
 if(element['name']=='category'){
  this.form.category=element['value']
 }
 if(element['name']=='color'){
  this.form.color=element['value']
 }
 if(element['name']=='quantity'){
  this.form.quantity=element['value']
 }
 if(element['name']=='marque'){
  this.form.marque=element['value']
 }
 if(element['name']=='Poids'){
  this.form.Poids=element['value']
 }
 if(element['name']=='promotion'){
  this.form.promotion=element['value']
 }
 if(element['name']=='new_price'){
  this.form.new_price=element['value']
 }
})
this.admin.update_product(id,this.form).subscribe(data=>console.log(data),

error=>{
  let id = e.target.getAttribute('data-id')
  document.querySelector(' input[data-val="'+id+'"]').classList.add('is-invalid');
  document.querySelector('.invalid-feedback').classList.add('show')
}
)
 
console.log(this.form)  

  }
  onBlur_delete(e){
   this.admin.delete_product(e.target.getAttribute('data-id')).subscribe(
    data=>
    {
      this.admin.get_product().subscribe((data:Array<Object>)=>this.products=data)
    },

    error=>console.log(error))
   
  }
  onBlur(e){
    let id = e.target.getAttribute('data-val');
     document.querySelector('input[data-val="'+id+'"]').classList.remove('is-invalid')
     document.querySelector('.invalid-feedback').classList.remove('show')
  }
  onChange(e){
 let val =  e.target.value;
 if(val=="All"){
   this.products=this.products_secondaire;
 }
 else{
 this.admin.which_categorie(val).subscribe(data=>{
   this.products=data['data'];
 })
 }
}

}
