import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }
  private sub = new Subject<string>()
  give_me_observable():Observable<any>{
return this.sub.asObservable();
  }
  setItem(key,data){
    localStorage.setItem(key,data);
    this.sub.next(data);
  }
}
