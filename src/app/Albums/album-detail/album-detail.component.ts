import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  @Input() result; 
  constructor(private route:Router) { }

  ngOnInit() {
    console.log(this.result);
  }
  goToDetails(id){
    this.route.navigateByUrl("/"+id)
  }

}
