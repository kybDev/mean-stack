import {Component, OnInit, OnDestroy} from'@angular/core';
import { Subscription } from 'rxjs'

import {PostsService} from "../post.service"
import { Post } from "../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl:"./post-list.component.html",
  styleUrls:['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy{
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postSrvc: PostsService){}

  ngOnInit(){
    this.posts = this.postSrvc.getPosts();
    this.postsSub = this.postSrvc.getPostUpdateListener()
    .subscribe((posts: Post[])=>{
      this.posts = posts;
    });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

}
