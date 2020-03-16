import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { GetDataService } from '../Services/get-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
    private image_1;
    private image_2;

  filedata:any;
  public myFile:null;
    fileEvent(e){
      if(e.target.files.length == 2 ){
        this.image_1 = e.target.files[0];
        this.image_2= e.target.files[1];
    
      }
      else alert('il faut choisit deux images')
    }
  constructor(private http: HttpClient,private sir:GetDataService) {
  }
   onSubmit(f: NgForm) {
       
            /*var myFormData = new FormData();
            const headers = new HttpHeaders();
          headers.append('Content-Type', 'multipart/form-data');
          headers.append('Accept', 'application/json');
          myFormData.append('image', this.filedata);
         this.sir.sir(myFormData) .subscribe(data => {
          console.log(data);
      });*/
      this.handleImage(this.image_1)
      this.handleImage(this.image_2)
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
