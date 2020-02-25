import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model'
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url= 'http://localhost:8000/api/comments';

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url)
  }

  getComment(name: string): Observable<Comment> {
    return this.http.get<Comment>(this.url + '/' + name)
  }
  //
  // insertComment(comment: Comment): Observable<Comment> {
  //   console.log(comment)
  //   const newComment= this.http.post<Comment>('http://localhost:8000/api/comments/', comment)
  //   console.log(newComment)
  //   return newComment;
  // }


  insertComment(comment: Comment){
    console.log(comment)
    this.http.post<Comment>(this.url + '/', comment)
        .subscribe(res => console.log('Done'))


  }

  updateComment(comment: Comment): Observable<void> {
    return this.http.put<void>(
        this.url + '/' + comment.id,
        comment
    )
  }

  deleteComment(name: string) {
    return this.http.delete(this.url + '/' + name)
  }

  userComments: Comment[]= [
    {
      id: 1,
      body: 'Wow so insightful',
      name: 'Taylor',
      email: 'taylor.palm@yahoo.com',
      date: new Date()
    },
    {
      id:2,
      body: 'Wow so insightful',
      name: 'Taylor',
      email: 'taylor.palm@yahoo.com',
      date: new Date()
    },
    {
      id: 3,
      body: 'Wow so insightful',
      name: 'Taylor',
      email: 'taylor.palm@yahoo.com',
      date: new Date()
    },
    {
      id:4,
      body: 'Wow so insightful',
      name: 'Taylor',
      email: 'taylor.palm@yahoo.com',
      date: new Date()
    },
    {
      id: 5,
      body: 'Wow so insightful',
      name: 'Taylor',
      email: 'taylor.palm@yahoo.com',
      date: new Date()
    },

  ];

  addComment(commentBody, userName, userEmail){
    const newComment: Comment= {
      id: 5,
      body: commentBody,
      name: userName,
      email: userEmail,
      date: new Date()};


    this.userComments.push(newComment)
  }




}
