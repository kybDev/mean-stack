import { Injectable} from "@angular/core";
import { Subject} from 'rxjs'
import { Post }from "./post.model"

@Injectable({providedIn:'root'})
export class PostsService{
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts(){
    return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postUpdated.asObservable();
  }

  addPost(title:string, content:string){
    const post:Post = {
      title: title,
      content: content
    };
    this.posts.push(post);
    this.postUpdated.next([...this.posts])
  }
}
