import { Injectable } from '@angular/core';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient ) {}
  // tslint:disable-next-line:typedef
  ollUsers(){
    return this
        .httpClient
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
