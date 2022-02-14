import { LandingpageComponent } from './landingpage/landingpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponentComponent } from './search-component/search-component.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  {path:'landingpage',component:LandingpageComponent},
  {path:'search-component',component:SearchComponentComponent},
  { path: '', redirectTo:"/landingpage", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
