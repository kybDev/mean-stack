import {Component, EventEmitter, Output} from'@angular/core';
import { NgForm } from "@angular/forms";
// import { Post } from "../post.model";
import {PostsService} from "../post.service"

@Component({
  selector: 'app-post-create',
  templateUrl:"./post-create.component.html",
  styleUrls:['./post-create.component.css']
})
export class PostCreateComponent{

  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postSrvc: PostsService){}

  onAddPost(form: NgForm){
    if(form.invalid) return;
    // const data : Post = {
    //   title : form.value.title,
    //   content : form.value.content
    // };
    // this.postCreated.emit(data);
    this.postSrvc.addPost(
      form.value.title,
      form.value.content
    );
    form.resetForm();
  }
}
