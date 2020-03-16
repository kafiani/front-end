import { Component, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import 'hammerjs';
import { CookiesService } from './Services/cookies.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'navbarXS';
  public show_cookies = false;
  constructor(
    private for_cookie:CookiesService
  ){}
  
  ngOnInit(){
    if(localStorage.getItem('logged_with')){
     let email = localStorage.getItem('logged_with');
     if(localStorage.getItem('cookie_close')){
       let tab = JSON.parse(localStorage.getItem('cookie_close'));
       if(tab.indexOf(email)!=-1) this.show_cookies = true;
     }
    }
    this.for_cookie.give_me_observable().subscribe(data=>{
      let tab = JSON.parse(localStorage.getItem('cookie_close'));
      if(tab.indexOf(data)!=-1) this.show_cookies = true; 
    })
  }
  hide_me()
{
  if(localStorage.getItem('logged_with')){
 let tab = JSON.parse(localStorage.getItem('cookie_close'));
 let index = tab.indexOf(localStorage.getItem('logged_with'));
 tab.splice(index,1);
 localStorage.setItem('cookie_close',JSON.stringify(tab))
 localStorage.removeItem('logged_with');
  }
  
}  

 
  }

