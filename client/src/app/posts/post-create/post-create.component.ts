import { Component, EventEmitter} from '@angular/core';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl : './post-create.component.html',
  styleUrls : ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent ='';
  enteredTitle = '';
 postsCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) {}
  onAddPost(form: NgForm) {
    if(form.invalid) {
      return;
    }


    this.postsService.addPost(form.value.title, form.value.content);
  }
}
