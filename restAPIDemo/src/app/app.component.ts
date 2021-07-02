import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: any;
  comments: any;

constructor(private http: HttpClient) {}

getPosts() {
  this.posts= this.http.get(this.ROOT_URL + '/posts')
}

getComments() {
  this.posts = this.http.get(this.ROOT_URL + '/comments')
}
}
