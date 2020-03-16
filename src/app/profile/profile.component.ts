import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../Services/get-data.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public lastForm = {
  first_name:null,
  last_name:null,
  email:null,
  address:null,
  phone:null,
  city:null
}
public invalid_phone =true;
public newForm = {
  first_name:null,
  last_name:null,
  email:null,
  address:null,
  phone:null,
  city:null
}
public no_update=true;
  constructor(
    private dataService:GetDataService,
    private snotify:SnotifyService
  ) { }

  ngOnInit() {

    this.dataService.get_data().subscribe((data:{data})=>{
      if(data.data[0]){
   this.newForm=data.data[0]
      }
      else{
        console.log(data.data)
      }

    })

  }
  onSubmit(){
if(JSON.stringify(this.newForm)!=JSON.stringify(this.lastForm)){
// DB update
  if(localStorage.getItem("DB")){
    let id = atob(localStorage.getItem("DB"))
   
  this.dataService.update_db(this.newForm,id).subscribe(
    data=>{
this.snotify.success("Done!","Data was updated successfully",{
  pauseOnHover:false
})
this.no_update=true;
      localStorage.setItem("DB",btoa(this.newForm.email))
    },
    error=>console.log(error)
  )
  }
  //

  //facebook update
  if(localStorage.getItem("id_facebook")){
    let id=localStorage.getItem("id_facebook");
    this.dataService.update_facebook(this.newForm,id).subscribe(
      data=>{
        this.snotify.success("Done!","Data was updated successfully",{
          pauseOnHover:false
        })
        this.no_update=true;
      },
      error=>console.log(error)
    )
  }
//update google
if(localStorage.getItem("id_google")){
  let id=localStorage.getItem("id_google");
  this.dataService.update_google(this.newForm,id).subscribe(
    data=>{
      this.snotify.success("Done!","Data was updated successfully",{
        pauseOnHover:false
      })
      this.no_update=true;
    },
    error=>console.log(error)
  )
}


}
else alert("nothing was change")

  }
  if_update(){
    this.dataService.get_data().subscribe((data:{data})=>{
      this.lastForm=data.data[0]  
      
       if(JSON.stringify(this.newForm)!=JSON.stringify(this.lastForm)) {
         this.no_update=false;

       }
       else this.no_update=true;
    })


   

  }
  onCountryChange(e){
    
  }
  getNumber(e){
   this.newForm.phone=e;
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
