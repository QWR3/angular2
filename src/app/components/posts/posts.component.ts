import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post [];
  choosenOne: Post;

  constructor(private postService: PostService) {}


  ngOnInit(): void {
    this.postService.ollUsers().subscribe(value => this.posts = value );
  }
  // tslint:disable-next-line:typedef
  getButtonUp(post: Post){
    console.log(post);
    this.choosenOne = post;
  }
}
