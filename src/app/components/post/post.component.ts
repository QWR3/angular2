import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Post} from '../models/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post ;
  @Output()
  buttonUp = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  button(post: Post){
    // console.log(post);
    this.buttonUp.emit(post);
  }

}
