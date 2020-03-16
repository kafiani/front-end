import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRegisterService } from '../Services/login-register.service';
import { TokenService } from '../Services/token.service';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  public form = {
    email:null,
    password:'',
    password_confirmation:'',
    first_name:null,
    last_name:null,
    isAdmin:true,
  }
  public invalid_feedback = false;
  public error = null;
  
  public auth_status = false;
  public invalid_feedback_email =false;
    constructor
    (
    private http:HttpClient,
    private Admin:AdminService,
    private handleToken:TokenService,
    private authService:AuthService,
    private router:Router,
    private notify:SnotifyService,

  
    
  
    ) 
    { }
    
    ngOnInit() {
  
      
    }
   
  
  
  
    
  
  
  
  
  
  
  
  
  
  
    add_Class_is_valid(e){
      /*if(elemnt.target.classList.contains("ng-valid")) elemnt.classlist.add("is-valid")*/
  let val = e.target.getAttribute("name");
  if(document.querySelector(`input[name=${val}]`).classList.contains("ng-valid")){
    document.querySelector(`input[name=${val}]`).classList.add("is-valid")
  }
  else{
    document.querySelector(`input[name=${val}]`).classList.remove("is-valid")
  }
  this.invalid_feedback_email=false;
  this.error=null;
  document.querySelector(`input[name=${val}]`).classList.remove("is-invalid")
  }
  
  
  
  
  
    onSubmit(){
     
        this.Admin.add_admin(this.form).subscribe(
          data=>this.handleData(data),
          error=>this.handleError(error)
          )
        
    }
    verifier_value(){
      let element = document.getElementById("password_confirmation");
      if(this.form.password!=this.form.password_confirmation){
        element.classList.add("is-invalid")
        this.invalid_feedback = true;
     
      }
      else{
        this.invalid_feedback = false;
        if(element.classList.contains("is-invalid")){
          element.classList.remove("is-invalid")
          this.invalid_feedback  = false;
          
  
        }
      }
    }
  verifier_password(){
    let element = document.getElementById("password_confirmation");
  if(this.form.password!='' && this.form.password_confirmation!=''
   && this.form.password!=this.form.password_confirmation){
    
    element.classList.add("is-invalid")
    this.invalid_feedback = true;
  
  
  }
  else {
    element.classList.remove("is-invalid")
    this.invalid_feedback=false;
  }
  
  }
  
    handleData(data){
      document.querySelectorAll('input').forEach(e=>{
        e['value']=null;
        e.classList.remove('is-valid')
      })
      this.error=null;
      this.invalid_feedback_email=false;
      let element =  document.getElementById("email");
      element.classList.remove("is-invalid");
      this.notify.success("Done!",{
        pauseOnHover:false
      
      })
      
     
    }
    handleError(error){
        if(error.error.errors.email) {
          let element =  document.getElementById("email");
          element.classList.add("is-invalid");
          this.error=error.error.errors.email;
          this.invalid_feedback_email=true;
        
        }
     
        
       
      
    }

}
