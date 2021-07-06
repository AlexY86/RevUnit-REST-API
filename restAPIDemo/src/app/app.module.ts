import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AboutComponent } from './pages/about/about.component';
import { UserComponent } from './components/user/user.component';
import { PostDisplayComponent } from './components/post-layout/post-layout.component';
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { CommentsService } from './services/comments.service';
import { AlbumComponent } from './components/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostCreateComponent } from './components/post-creator/post-creator.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlbumsComponent,
    PostsComponent,
    AboutComponent,
    UserComponent,
    PostDisplayComponent,
    AlbumComponent,
    PhotoComponent,
    CommentComponent,
    PostCreateComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [PostsService, UsersService, CommentsService]
})
export class AppModule { }