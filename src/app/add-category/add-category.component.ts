import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
public form = {
  name:null,
  description:null
}
  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit() {
  }
  onSubmit(){
this.adminService.add_categorie(this.form).subscribe(
  data=>{
    document.querySelectorAll('.form-control').forEach(function(ip){
      ip['value']=null
      ip.classList.remove('ng-valid')
    })
  },
  error=>{
    document.getElementById('name').classList.add('is-invalid');
    document.querySelector('.invalid-feedback').classList.add('show')
   
  }
)


  }
  onBlur(){
    if(document.getElementById('name').classList.contains('is-invalid')) document.getElementById('name').classList.remove('is-invalid');
    
    if(document.querySelector('.invalid-feedback').classList.contains('show')) document.querySelector('.invalid-feedback').classList.remove('show')   
    
  }

}
