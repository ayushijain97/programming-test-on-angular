import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  result:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(environment.url+"/users").subscribe((res)=>{
      console.log(res);
      this.result = res;
    })
  }

}
