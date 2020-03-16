import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckCanActiveService {
  private url = "http://127.0.0.1:8000/api"
  constructor(
    private http:HttpClient
  ) { }
  if_user(email){
  return this.http.get(`${this.url}/if_user/${email}`);
 
 
  }
  

}
