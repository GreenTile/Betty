import { BadReqError } from './../common/bad-req-error';
import { NotFoundError } from './../common/not-found-error';
import { AppErr } from './../common/app-err';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit(){
    this.service.getAll()
    .subscribe(serverPosts => this.posts = serverPosts);
  }

  createPost(input: HTMLInputElement){
    let post= {title: input.value}
    this.posts.splice(0,0,post);
    
    input.value= '';
    
    this.service.createAll(post)
    .subscribe(
      newPost => {
        post['id'] = newPost.id;
      // console.log(newPost.json());
    },
    (error: AppErr)=>{
      this.posts.splice(0, 1);
      // console.log('erererer');
      if(error instanceof BadReqError){
        // this.form.setErrors(error.originalError);
      }else{
        throw error;
      }
    });
  }


  updatePost(post){
    this.service.update(post)
    .subscribe(
      updatedPost =>{
      console.log(updatedPost);
    });
    // this.http.put(this.url, JSON.stringify(post);
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
    this.service.delete(post.id)
    .subscribe(
      null,(error: AppErr)=>{
      this.posts.splice(index, 0, post);
      if(error instanceof NotFoundError){
        alert('has already deleted');
        console.log(error);
      }
      else{
        throw error;
      }
    });
  }






}
