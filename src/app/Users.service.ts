import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USER } from './data';
import { Data } from './mock-data';
import { FirebaseService } from './core/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private fb: FirebaseService) {}

  getPosts(): Observable<USER[]> {
    return of(Data);
  }

  getPost(userName: string) {
    return of(Data.find(post => post.userName === userName));
  }
}
