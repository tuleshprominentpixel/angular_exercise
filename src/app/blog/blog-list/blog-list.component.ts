// import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router,Route, ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';
// import {ScrollingModule} from '@angular/cdk/scrolling';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs:Blog[]=[];
  blogScolled:Blog[]=[];
  listArray : string[] = [];
  sum = 5;
  direction = "";
  blogdisplay:number=5;
  constructor(private blogSerice:BlogService,
    private router:Router,
    private route:ActivatedRoute) { 
      this.blogs=this.blogSerice.getBlogs();
    }

  ngOnInit(): void {
    this.blogs=this.blogSerice.getBlogs();
    console.log(this.blogs);

    this.appendItems();
    // this.addItems(0,this.blogdisplay);
  }
  blogShowDetail(id:number){
    console.log(id)
    this.router.navigate([id],{relativeTo:this.route})
  }
  /*----------------*/
  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

    this.sum += 1;
    this.appendItems();
    
    this.direction = "scroll down";
  }

  onScrollUp(ev: any) {
    console.log("scrolled up!", ev);
    this.sum += 1;
    this.prependItems();

    this.direction = "scroll up";
  }

  appendItems() {
    this.addItems("push");
  }

  prependItems() {
    this.addItems("unshift");
  }

  addItems(_method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if( _method === 'push'){
        this.listArray.push([i].join(""));
      }else if( _method === 'unshift'){
        this.listArray.unshift([i].join(""));
      }
    }
  }
  /*----------------*/
  // onScrollDown(ev: any) {
  //   console.log("scrolled down!!", ev);

  //   this.sum += 20;
  //   this.appendItems();
    
  //   this.direction = "scroll down";
  // }

  // onScrollUp(ev: any) {
  //   console.log("scrolled up!", ev);
  //   this.sum += 20;
  //   this.prependItems();

  //   this.direction = "scroll up";
  // }

  // appendItems() {
  //   this.addItems();
  // }

  // prependItems() {
  //   this.addItems("unshift");
  // }

  /*addItems(start,end) {
    for (let i = start; i < end; ++i) {
      if(this.blogs[i] == undefined){
        return;
      }
      this.blogScolled.push(this.blogs[i]);
    }
  }*/
  // addItems(_method: string) {
  //   for (let i = 0; i < this.sum; ++i) {
  //     if( _method === 'push'){
  //       this.listArray.push([i].join(""));
  //     }else if( _method === 'unshift'){
  //       this.listArray.unshift([i].join(""));
  //     }
  //   }
  // }

  /*onScroll(){
    const start = this.blogdisplay;
    this.blogdisplay += 5;
    this.addItems(start, this.blogdisplay);
  }*/
  deleteBlog(id:number){
    console.log(id)
    this.blogSerice.deleteBlog(id);
  }
}
