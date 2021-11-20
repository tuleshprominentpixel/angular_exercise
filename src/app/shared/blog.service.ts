import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  updateBlog=new Subject();
  blogs:Blog[]=[
    new Blog(
      0,
      'aaa',
      'bbb',
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg',
      'author',
      [{ item_id: 1, item_text: 'HTML' }, { item_id: 6, item_text: 'PHP' }],
      new Date(2021, 10, 14, 12, 38, 32, 0)
    ),
    new Blog(
      1,
      'cc',
      'bbdddb',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'author1',
      [{ item_id: 5, item_text: 'reactJs' }, { item_id: 6, item_text: 'PHP' }],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      2,
      'dd',
      'bbb',
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'author11',
      [{ item_id: 5, item_text: 'reactJs' }, { item_id: 6, item_text: 'PHP' }],
      new Date(2021, 10, 14, 12, 38, 32, 0)
    ),
    new Blog(
      3,
      'ee',
      'bbdddb',
      'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'author111',
      [{ item_id: 5, item_text: 'reactJs' }, { item_id: 6, item_text: 'PHP' }],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      4,
      'ff',
      'bbb',
      'https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'author2',
      [{ item_id: 5, item_text: 'reactJs' }, { item_id: 6, item_text: 'PHP' }],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      5,
      'gg',
      'bbdddb',
      'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'author22',
      [{ item_id: 5, item_text: 'reactJs' }, { item_id: 6, item_text: 'PHP' }],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      6,
      'hh',
      'bbb',
      'https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'tulesh.g@prominentpixel.com',
      [{ item_id: 5, item_text: 'reactJs' }, { item_id: 6, item_text: 'PHP' }],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
    new Blog(
      7,
      'jj',
      'bbdddb',
      'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'author2222',
      [{ item_id: 5, item_text: 'reactJs' }, { item_id: 6, item_text: 'PHP' }],
      new Date(2021, 11, 14, 12, 38, 32, 0)
    ),
  ];
  constructor(private authService: AuthService) { }

  getLatestIndexOfBlog(){
    return this.blogs.length;
  }

  getBlogs(){
    return this.blogs;
  }

  getBlog(index: number) {
    return this.blogs[index];
  }

  addBlog(newBlog: Blog) {
    this.blogs.push(newBlog);
  }


  getauther(auth) {
    return this.blogs;
  } 

  updateBlogs(index: number, newBlog) {
    console.log(index)
    this.blogs[index] = newBlog;
    this.updateBlog.next(this.blogs.slice());
  }

  editBlog(id: number, updateBlog: Blog){
    this.blogs[id] = updateBlog;
    this.updateBlog.next();
  }

  deleteBlog(id: number){
    this.blogs.splice(id,1);
    this.updateBlog.next();
  }
}
