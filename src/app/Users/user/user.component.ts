import { Component, Input, OnInit } from '@angular/core';
import { Router,Route } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() result;

  constructor(private route:Router) { }

  ngOnInit() {
  }
  getUsersDetails(id){
      this.route.navigateByUrl("/"+id)
    }

}
