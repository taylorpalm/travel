import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogsService} from "./services/blogs.service";
import { NgxPaginationModule} from "ngx-pagination";
import { BlogPostComponent } from './components/blogs/blog/blog-post.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommentsComponent } from './components/blogs/comments/comments.component';
import {CommentsService} from "./services/comments.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    AboutComponent,
    BlogsComponent,
    BlogPostComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
      HttpClientModule
  ],
  providers: [BlogsService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
