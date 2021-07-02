import { Component, OnInit } from '@angular/core';

// Model
import { PostModel } from '../../models/post.model';
// Service
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(
    private postsService: PostsService
  ) { }

  addPost(post: PostModel) {
    this.postsService.addPost(post).subscribe()
  }

  ngOnInit() {
  }

}