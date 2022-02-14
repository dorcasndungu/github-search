import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  repoName: string = '';

  constructor(private http: HttpClient) { 
    console.log("service is now ready!");
    environment.username ='dorcasndungu';
  }
  getUserInfo(){
    return this.http.get("https://api.github.com/users/"+ environment.username +"?client_id=" + environment.clientId + "&client_secret=" + environment.clientSecret);
    
  }
  getUserRepos(){
    return this.http.get("https://api.github.com/users/"+environment.username +"/repos?client_id="+environment.clientId + "&client_secret=" + environment.clientSecret);
  }


  updateProfile(username:string){
    environment.username =username
  }
  UpdateRepo(repoName:string) {
    this.repoName = repoName;
  }
}
