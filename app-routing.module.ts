import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {AboutComponent} from "./components/about/about.component";
import {BlogsComponent} from "./components/blogs/blogs.component";
import {BlogPostComponent} from "./components/blogs/blog/blog-post.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'about', component: AboutComponent},

  {path: 'blogs', pathMatch: 'full', component: BlogsComponent},
  {path: 'blog/:title', pathMatch: 'full', component: BlogPostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
