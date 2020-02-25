import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../../services/comments.service";
import {Comment} from "../../../models/comment.model";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  config: any;
  // count: 10;

  constructor(private commentsService: CommentsService) {
    this.comments = commentsService.userComments;
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.comments.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
  }

}
