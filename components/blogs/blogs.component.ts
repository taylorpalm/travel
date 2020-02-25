import {Component, OnInit} from '@angular/core';
import {Blog} from "../../models/blog.model";
import {BlogsService} from "../../services/blogs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: Blog[];
  config: any;
  count: 5;

  constructor(private blogsService: BlogsService,
              private router: Router) {
    this.blogs= blogsService.blogs;
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.count
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  onClick(blog){
    console.log(blog)
    this.blogsService.blogSelected= blog;
    this.router.navigate(['blog', blog.title])
  }


  ngOnInit() {
  }

}
