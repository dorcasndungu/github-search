import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';
@Component({
  selector: 'app-repos-view',
  templateUrl: './repos-view.component.html',
  styleUrls: ['./repos-view.component.css']
})
export class ReposViewComponent implements OnInit {
  repos: any;
  constructor(private dataServiceService :DataServiceService){ }

  ngOnInit(){
    this.dataServiceService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })  	
  }

}
