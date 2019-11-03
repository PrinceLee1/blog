import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { WritePostComponent} from './pages/write-post/write-post.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component'
import { from } from 'rxjs';
import {TitleCategoryResolverService} from './services/title-category-resolver.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {path : '', component:AppNavComponent,children:[
    {path : '',component:LandingPageComponent},
    {path : 'home',component:LandingPageComponent},
    {path : 'signup', component:SignupComponent},
  {path : 'login', component:LoginComponent},
  {path : 'main-content/:id',component:MainContentComponent}
  ]},
  {path : 'dashboard', component:DashboardComponent,children:[
    {path : '', component:DashboardHomeComponent},
    {path : 'write-post/:id', component:WritePostComponent},
    {path : 'posts', component:PostsComponent,}
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 