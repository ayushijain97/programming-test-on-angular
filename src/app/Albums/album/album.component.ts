import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  userData:any;
  albumData:any;
  results=[];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(environment.url+"/users").subscribe((res)=>{
      this.userData = res;
      console.log(res);
    })

    this.http.get(environment.url+"/albums").subscribe((res)=>{
      console.log(res);
      this.albumData = res;
      if(this.albumData && this.userData){
        this.getElements();
      }
    })

  }
  getElements(){
    console.log(this.albumData);
    this.albumData.forEach((album) => {
      let user =  this.userData.filter(user=>
        user.id===album.userId
      )
      this.results.push({
      id: album.id,
      userID:album.userId,
      username: user[0].username,
      title: album.title
      })
  })
  console.log(this.results);
}
  

}
