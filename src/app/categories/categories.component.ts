import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { element } from 'protractor';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private admin:AdminService
  ) { }
  private form = {
    name:null,
    description:null
  }
  
  public categories :Array<object>
  ngOnInit() {
    this.admin.get_categorie().subscribe((data:Array<object>)=>this.categories=data)
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
 
})
this.admin.update_categorie(id,this.form).subscribe(data=>console.log(data),

error=>{
  let id = e.target.getAttribute('data-id')
      document.querySelectorAll('input[data-val="'+id+'"]').forEach(e=>{
        if(e['name']=='name'){
          e.classList.add('is-invalid');
        }
      })
      document.querySelector('.invalid-feedback').classList.add('show')
})
   

  }
  onBlur_delete(e){
   this.admin.delete_categorie(e.target.getAttribute('data-id')).subscribe(
    data=>
    {
      this.admin.get_categorie().subscribe((data:Array<Object>)=>this.categories=data)
    },

    error=>{
      
    }
   )
  }
   
  
  onBlur(e){
    let id = e.target.getAttribute('data-val')
    if(e.target.classList.contains('is-invalid')) e.target.classList.remove('is-invalid')
    if(e.target.classList.contains('show')) e.target.classList.remove('show')
    
    
    
  }

}
