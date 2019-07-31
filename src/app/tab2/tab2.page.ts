import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { USER } from '../data';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  posts: USER[];
  selectedChat: USER;
  filtered = [];

  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.userService.getPosts().subscribe (posts => this.posts = this.filtered = posts);
    }

    selectedPost(selected) {
      this.router.navigate(['/tabs/tab2/chat/' + selected]);
    }
    search(search) {
      // console.log('af', this.posts);
      if (search === '') {
        return this.filtered = this.posts;
      }
      let searchData = search;
      searchData = searchData.toLocaleLowerCase();
      this.filtered = this.posts.filter(data => {
        return data.userName.toLocaleLowerCase().search(searchData) !== -1
          ? true
          : false;
      });
      // console.log('bef', filtered);
    }
  }
