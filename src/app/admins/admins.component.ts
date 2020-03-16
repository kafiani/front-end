import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
public admins:Array<Object>
public form = {
  first_name:null,
  last_name:null,
  email:null
}
  constructor(
    private admin:AdminService
  ) { }

  ngOnInit() {
    this.admin.get_admin().subscribe(
      (data:Array<Object>)=>{
        this.admins=data
        
      }
    )
  }
update(e){
let id = e.target.getAttribute('data-id');
document.querySelectorAll('input[data-val="'+id+'"]').forEach(e=>{
if(e['name']=='first_name') this.form.first_name=e['value']
if(e['name']=='last_name') this.form.last_name=e['value']
if(e['name']=='email') this.form.email=e['value']

})
this.admin.update_admin(id,this.form).subscribe(
  data=>console.log(data)
  ,
  error=>{
    document.querySelectorAll('input[data-val="'+id+'"]').forEach(e=>{
      if(e['name']=='email'){
        e.classList.add('is-invalid');
      }
    })
    document.querySelector('.invalid-feedback').classList.add('show')
  }
)
}
onBlur(e){
  let id = e.target.getAttribute('data-val')
  if(e.target.classList.contains('is-invalid')) e.target.classList.remove('is-invalid')
  if(e.target.classList.contains('show')) e.target.classList.remove('show')
  
  
  
}
delete(e){
  let  id = e.target.getAttribute('data-id');
  this.admin.delete_admin(id).subscribe(
    data=>this.admin.get_admin().subscribe(
      (data:Array<Object>)=>this.admins=data
    ),
    error=>console.log(error)
  )
  
}
}
