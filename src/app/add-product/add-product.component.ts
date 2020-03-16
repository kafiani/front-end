import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetDataService } from '../Services/get-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  public input_file_is_valid = false;
  public form = {
    name:null,
    description:null,
    category:null,
    color:null,
    quantity:null,
    marque:null,
    new_price:null,
    Poids:null,
    promotion:null,
    images:null
  }
  public all_ctegories:Array<Object>;
    constructor(
      private adminService:AdminService,
      private sir:GetDataService
    ) { }
    private image_1=null;
    private image_2=null;
    fileEvent(e){
      if(e.target.files.length > 1 ){
       this.input_file_is_valid = true;
        this.image_1 = e.target.files[0];
        this.image_2= e.target.files[1];
       this.form.images= this.image_1.name+','+this.image_2.name;
   }
      else this.input_file_is_valid=false;
    }
  
    ngOnInit() {
      this.adminService.get_categorie().subscribe((data:Array<Object>)=>{
        this.all_ctegories=data
        console.log(this.all_ctegories)
      })
    }
    onSubmit(){
  this.adminService.add_product(this.form).subscribe(
    data=>{
      this.handleImage(this.image_1)
        this.handleImage(this.image_2)
      document.querySelectorAll('input.form-control').forEach(function(ip){
        ip['value']=null
        
      })
      document.querySelector('textarea').value=null;
    },
    error=>{
      document.getElementById('name').classList.add('is-invalid')
      document.querySelector('textarea').classList.add('is-invalid')
      
      document.querySelectorAll('.invalid-feedback').forEach(e=>{
        e.classList.add('show')
    })
    console.log(error)
      })
  
  
  
    }
    onChange(e){
      this.form.category=e.target.value;
    }
    onBlur(){
      document.getElementById('name').classList.remove('is-invalid')
      document.querySelector('textarea').classList.remove('is-invalid')
      document.querySelectorAll('.invalid-feedback').forEach(e=>{
        e.classList.remove('show') 
      })
    }
    handleImage(file){
      var myFormData = new FormData();
      const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('image', file);
   this.sir.sir(myFormData) .subscribe(data => {
    console.log(data);
    })
  }
}
