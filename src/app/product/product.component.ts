import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductCategorieService } from '../Services/get-product-categorie.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
public product :Object;
private id;
public active_image='';
public images = [];
public products_sm :Array<Object>
public quantitySelected = 1;
  public maxQuantity:number;
  public theProduct : Object;
  public command :command[]= [];
  public loggedIn:boolean;
  constructor(
    private route:ActivatedRoute,
    private get_product:GetProductCategorieService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id');
     this.get_product.get_product(params.get('id')).subscribe(data=>{
      this.maxQuantity = data['data'].quantity; 

      
       this.theProduct =  this.product = data['data'];
        this.products_sm=data['products'];
        this.split_image(this.product['images']);
        console.log(this.images)
        console.log(this.active_image)
        document.querySelector('.carousel-item.active').classList.remove('active')
        document.getElementById('act').classList.add('active');
        
      })

    });

  }
  split_image(str){
    console.log(str.length);
    
let tab = str.split(',');
this.active_image=tab[0];
tab.splice(0,1);
this.images = tab;
console.log(this.images)
  }
  donne_chemin(str:string) {
    str ="../assets/images/"+str
    return str;
  }
  splite_image(tab){
return "../assets/images/"+tab.split(',')[0];
  }
 
  makeCommand(){
    if (!(localStorage.getItem("command") === null)) 
    {
      this.command = JSON.parse(localStorage.getItem('command'));
    }

    if(this.quantitySelected === undefined)
    this.quantitySelected=1;
    let ifexistalready = 0;
    for(let line of this.command)
    {
      if(line.idProduct == this.theProduct['id'])
      {        
        if(this.maxQuantity>= line.quantity+this.quantitySelected)
        line.quantity += this.quantitySelected;
        ifexistalready = 1;
      }
    }

    if(!ifexistalready){this.command.push({idProduct:this.theProduct['id'],quantity:this.quantitySelected});}

    localStorage.setItem('command', JSON.stringify(this.command));
    this.command = [];
  }
  scroll_me(){
    window.scrollTo(0,0);
  }





}
class Product{
  id: number;
     name: string; 
     description: string;
     price: string;
     category: string;
     color: string;
     quantity: number;
     Poids:null;
}

class command{
  idProduct:number;
  quantity:number;
}
