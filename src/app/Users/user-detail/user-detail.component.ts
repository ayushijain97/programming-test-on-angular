import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userDetails:any;

  constructor(private router:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
      var slug = this.router.snapshot.params.tr;
      console.log(slug);

      this.http.get(environment.url + "/users/" + slug +"/posts").subscribe((res)=>{
        this.userDetails= res;      
        console.log(this.userDetails);    
      })


  }

}
