import { Component, OnInit } from '@angular/core';
import {Blog} from "../../../models/blog.model";
import {FormBuilder, Validators} from "@angular/forms";
import {BlogsService} from "../../../services/blogs.service";
import {Comment} from "../../../models/comment.model";
import {CommentsService} from "../../../services/comments.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  blog: Blog;
  comment;

  constructor(private blogsService: BlogsService,
              private commentService: CommentsService,
              private fb: FormBuilder) {
    this.blog= blogsService.blogSelected;
  }

  onSubmit(form){
    console.log(form)
    const comment={
      id: 3,
      body: form.value.body,
      name: form.value.name,
      email: form.value.email,
      date: new Date()
    }
    this.commentService.insertComment(comment);
    this.commentService.addComment(form.value.body, form.value.name, form.value.email)
  }

  ngOnInit() {

    this.comment= this.fb.group({
          name: ['', Validators.required],
          body: ['', Validators.required],
          email:['', [Validators.required, Validators.email]]
    })

}

}
