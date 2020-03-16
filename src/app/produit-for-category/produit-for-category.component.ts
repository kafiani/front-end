import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../Services/admin.service';
import { GetProductCategorieService } from '../Services/get-product-categorie.service';
@Component({
  selector: 'app-produit-for-category',
  templateUrl: './produit-for-category.component.html',
  styleUrls: ['./produit-for-category.component.css']
})
export class ProduitForCategoryComponent implements OnInit {
public products :Array<object>
public search = null;
private id;
  constructor(
    private route:ActivatedRoute,
    private admin:AdminService,
  private cat_product:GetProductCategorieService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id');
      this.cat_product.get_products_by_categorie(params.get('id')).subscribe(
        (data)=>{
this.products=data['data'] 

      }
      )
      })
    }
    split_images(e:string){
      let img = "../assets/images/"+e.split(',')[0];
      return img;
    }
    onKeyup(){

      if(this.search==''){
        document.querySelector('.container .form-group i').classList.remove('hide');
        this.cat_product.get_products_by_categorie(this.id).subscribe(
          (data)=>{
  this.products=data['data'] 
  
        }
        )
      }
      else{
      this.cat_product.get_products_like(this.id,this.search).subscribe(
        (data)=>this.products=data['data'] 
      )
     
    }
  }
  
  }


