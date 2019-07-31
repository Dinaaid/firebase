import { Component, OnInit } from '@angular/core';
import { Data } from '../mock-data';
import { USER } from '../data';
import { UsersService } from '../users.service';
import { FirebaseService } from '../core/firebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  posts: USER[];

  ngOnInit() {
    this.getPosts();
    // this.createUser();
  }

  constructor(private userService: UsersService, private fb: FirebaseService) {}
  getPosts() {
    this.userService.getPosts().subscribe(posts => (this.posts = posts));
  }

  createUser() {
    this.fb.addItem('users', {
      username: 'ahmed',
      email: 'aff@aff.com',
      image: 'https://via.placeholder.com/150',
      phone: '1232323123213'
    });
  }

  postLiked() {
    console.log('Liked');
  }
  postCommented() {
    console.log('Commented');
  }
}
