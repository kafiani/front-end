import { Component, OnInit } from '@angular/core';
import { PanierServiceService } from '../Services/panier-service.service';
import { commands, TempoPanier, Product } from '../Services/everything.service';
import { loadavg } from 'os';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  allCommands:commands[] = [];
  allTempoCommands:TempoPanier[] = [];
  constructor(private panierServie:PanierServiceService,
    private router:Router) { }

  ngOnInit() {

    if(JSON.parse(localStorage.getItem('command')) == undefined){
      localStorage.setItem('command','[]');
    }
    this.allCommands = JSON.parse(localStorage.getItem('command'));

    this.getCommandsLines();
  }
 
  total(){
    let tot = 0;
    for(let line of this.allTempoCommands)
    {
      tot += line.quantity*line.product.new_price;
    }
    return tot;
  }
  deleteCommand(id){
    let i=0;
    
      for(let oneLine of this.allCommands)
      {
        
        if(oneLine.idProduct == id)
        {
          this.allCommands.splice(i, 1);
        }
        if(this.allTempoCommands[i].product.id == id)
        {
          this.allTempoCommands.splice(i, 1);
  
        }
        i++;
      }
      localStorage.setItem('command', JSON.stringify(this.allCommands));
    
  }

  getCommandsLines(){
    this.allTempoCommands = [];
    for(let oneLine of this.allCommands)
    this.panierServie.getThisProduct(oneLine.idProduct).subscribe(
      (data:Product)=>
      {
        this.allTempoCommands.push({quantity:oneLine.quantity,product:data});
      },
      error=>console.error(error)
  );
  }

  editQuantity(idProduct, newQauntity){
    let i = 0;
    for(let oneLine of this.allCommands)
    {
      
      if(oneLine.idProduct == idProduct )
      {     
        oneLine.quantity = newQauntity;
        this.allTempoCommands[i].quantity = newQauntity;
      }

     

      i++;
    }
    localStorage.setItem('command', JSON.stringify(this.allCommands));
    this.allCommands = JSON.parse(localStorage.getItem('command'));
  }
  splice_img(str){
    str = "../assets/images/"+str.split(',')[0];
    return str;
  }

  onCheckout(){
    localStorage.setItem('total', this.total().toString());
    this.router.navigateByUrl('checkout');
  }
}
