import { Component, OnInit, HostListener } from '@angular/core';
import { GetProductCategorieService } from '../Services/get-product-categorie.service';
import { splitAtPeriod } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private get_product:GetProductCategorieService) { }
public products:Array<{
  name,images,description,category,color,
  quantity,marque,new_price,Poids,promotion
}>
@HostListener("window:scroll", [])
onWindowScroll() {
 //we'll do some stuff here when the window is scrolled
 alert('gggg')
} 
  ngOnInit() {
this.get_product.get_gome_products().subscribe(
  data=>{
    console.log(data['data'])
    this.products=data['data']
    
  }
,
  error=>console.log(error)
)

  }
  split_images(e:string){
    let img = "../assets/images/"+e.split(',')[0];
    return img;
  }
  scroll(){
    console.log('scrolling');
    
  }
}
