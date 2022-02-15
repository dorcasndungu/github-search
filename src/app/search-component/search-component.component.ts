
import { Component, OnInit } from '@angular/core';
import { Repos } from "../repos";
import { Users } from "../users";
import { DataServiceService } from 'src/services/data-service.service';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  user: any;
  repos: any;
  username: any = 'dorcasndungu'
  constructor(private dataServiceService :DataServiceService) {

  }

ngOnInit(){
  this.dataServiceService.updateProfile(this.username);
  this.dataServiceService.getUserInfo().subscribe(user => {
    console.log(user);
    this.user = user;
  });

	
}
}
