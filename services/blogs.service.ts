import { Injectable } from '@angular/core';
import {Blog} from "../models/blog.model";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  blogSelected: Blog;

  constructor() { }

  blogs: Blog[]=[
    {title: 'First Post!',
    image: '../../../assets/costa.jpg',
    body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
    date: new Date()}, {
    title: 'First Post!',
    image: '../../../assets/costa.jpg',
    body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
    date: new Date()}, {
    title: 'First Post!',
    image: '../../../assets/costa.jpg',
    body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
      date: new Date()},
    {
      title: 'First Post!',
      image: '../../../assets/costa.jpg',
      body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
      date: new Date()},
    {
      title: 'First Post!',
      image: '../../../assets/costa.jpg',
      body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
      date: new Date()},
    {
      title: 'First Post!',
      image: '../../../assets/costa.jpg',
      body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
      date: new Date()},
    {
      title: 'First Post!',
      image: '../../../assets/costa.jpg',
      body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
      date: new Date()},
    {
      title: 'First Post!',
      image: '../../../assets/costa.jpg',
      body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
      date: new Date()},
    {
      title: 'First Post!',
      image: '../../../assets/costa.jpg',
      body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
      date: new Date()},
    {
      title: 'First Post!',
      image: '../../../assets/costa.jpg',
      body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
      date: new Date()},
    {
      title: 'First Post!',
      image: '../../../assets/costa.jpg',
      body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
      date: new Date()},
    {
      title: 'First Post!',
      image: '../../../assets/costa.jpg',
      body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
      date: new Date()},
    {
      title: 'First Post!',
      image: '../../../assets/costa.jpg',
      body: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to ' +
          'my shirt with my name printed on it? Do you see a little Asian child with a blank ' +
          'expression on his face sitting outside on a mechanical helicopter that shakes when ' +
          'you put quarters in it? No? Well, that\'s what you see at a toy store. And you must ' +
          'think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.',
      date: new Date()}
  ]

}
