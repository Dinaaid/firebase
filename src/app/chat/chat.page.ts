import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
posts;
  constructor(private userService: UsersService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.getPosts();

  }
  getPosts() {
    const userName = this.route.snapshot.paramMap.get('userName');
    this.userService.getPost(userName).subscribe(post => this.posts = post);
    }
}
