import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataServiceService } from 'src/services/data-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ReposViewComponent } from './repos-view/repos-view.component';
import { ZeroRepoComponent } from './zero-repo/zero-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SearchComponentComponent,
    NavbarComponent,
    NotFoundComponent,
    ReposViewComponent,
    ZeroRepoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [DataServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
