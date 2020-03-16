import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error, element } from 'protractor';
import { LoginRegisterService } from '../Services/login-register.service';
import { TokenService } from '../Services/token.service';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

import * as firebase from 'firebase'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public form = {
  email:null,
  password:'',
  password_confirmation:'',
  first_name:null,
  last_name:null,
  address:null,
  city:null,
  phone:null
}
public invalid_feedback = false;
public error = null;

public auth_status = false;
public invalid_feedback_email =false;
public invalid_phone = true;
private table_of_cokies:Array<string> = []
  constructor
  (
  private http:HttpClient,
  private register_login:LoginRegisterService,
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
   
      this.register_login.register(this.form).subscribe(
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
    this.error=null;
    this.invalid_feedback_email=false;
    let element =  document.getElementById("email");
    element.classList.remove("is-invalid");
    this.notify.success("Now login ","Done!",{
      timeout:5000,
      showProgressBar:true,
      pauseOnHover:false,
      closeOnClick:false,
      buttons:[
        {text:"OK",
      action:toastr=>{
        this.notify.remove(toastr.id)
        this.router.navigate(["login"])
      
       
      }
      }
      ]
      
    })
    setTimeout(()=>{
      this.router.navigateByUrl("login")
    },6000)
    this.handleToken.handleData(data.access_token);
    this.authService.change_auth_Staust(true)
    if(localStorage.getItem('cookie_close')){
      this.table_of_cokies = JSON.parse(localStorage.getItem('cookie_close'));
    let ts = this.table_of_cokies.indexOf(this.form.email);
    if(ts==-1) this.table_of_cokies.push(this.form.email)
   localStorage.setItem('cookie_close',JSON.stringify(this.table_of_cokies))
    }
    else{
      this.table_of_cokies.push(this.form.email);
      localStorage.setItem('cookie_close',JSON.stringify(this.table_of_cokies))
    }
  }
  handleError(error){
      if(error.error.errors.email) {
        let element =  document.getElementById("email");
        element.classList.add("is-invalid");
        this.error=error.error.errors.email;
        this.invalid_feedback_email=true;
      
      }
      
     
    
  }

  onCountryChange(e){
    
    }
    getNumber(e){
     this.form.phone=e;
    }
    hasError(e){
      if(!e) {this.invalid_phone = true;
        document.querySelector('.fedd').classList.add("show");
      }
      if(e) {
        this.invalid_phone=false;
        document.querySelector('.fedd').classList.remove("show");
      }
      
    }
 
  
}
