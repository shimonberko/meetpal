

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  
  posts: any[];

  constructor(private http: HttpClient) { 
    http.get('http://jsonplaceholder.typicode.com/posts').subscribe(response =>
      {
        // console.log(response);
        // this.posts = response;
      });
  }

  
  createPost(input: HTMLInputElement)
  {
    let post: any = {title: input.value}
    input.value = '';
    this.http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify(post)).subscribe(response =>
    {
        // post.id = response.id;
        this.posts.splice(0, 0, post);
   
    });

  }

  updatePost(post)
  {
    this.http.put('http://jsonplaceholder.typicode.com/posts' + '/' + post.id, JSON.stringify(post)).subscribe(response =>
    {

       
    });
    

  }

}
