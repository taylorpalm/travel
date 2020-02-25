import {Component, OnInit} from '@angular/core';
import {CommentsService} from "./services/comments.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Taylor In Transit';
  comments;

  constructor(private commentService: CommentsService) {

  }

  ngOnInit(): void {
    //
    //   this.commentService.getAllComments()
    //       .subscribe( comments=>
    //   {
    //     console.log(comments.comments[0].body)
    //     console.log(comments)
    //     this.comments=comments.comments;
    //   })
    //
    // }

  }
}
