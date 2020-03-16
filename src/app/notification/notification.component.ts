import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
public notify_quantite :Array<object> = []
  constructor(
    private admin : AdminService,
    private test:TestService
  ) { }

  ngOnInit() {
this.admin.notify_quantite().subscribe(
  data=>{this.notify_quantite=data['data']
this.test.setItem('nbr_notify',data['data'].length);
}
);
  }

}
