import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Blog } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {
  myblognumber:boolean = false;
  myblog;
  blogone;
  a;
  b;
  c;
  i;
  myfinalblog:Blog[]=[];
  constructor(private blogService: BlogService,
    private authService: AuthService,
    private router: Router,private route :ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.blogone = this.authService.loginUserNameOrEmail;
    // this.blogone="author2222"
    this.myblog=this.blogService.getauther(this.blogone);
    this.a=this.myblog[0].author;
    for(this.i=0;this.i<(this.blogService.getLatestIndexOfBlog());this.i++){
      this.a=this.myblog[this.i].author;
      if(this.blogone==this.myblog[this.i].author)
      { 
        this.b=this.myblog[this.i].id;
        console.log(this.myblog[this.i].id);
        this.myblognumber=true;
        this.myfinalblog.push(this.blogService.getBlog(this.b));
      }
      this.c=this.blogService.getBlog(this.b);
      
      console.log(this.c);
    }
    console.log(this.myfinalblog);

    
  }

  onDetail(id){
    this.router.navigate(['../blog/'+id],{relativeTo: this.route});
  }
  onEdit(id){
    this.router.navigate(['../blog/'+id+'/edit'],{relativeTo: this.route});
  }

  onDelete(id){
    console.log(id);
    this.blogService.deleteBlog(id);
    // this.router.navigate(['../this.myblog'],{relativeTo: this.route});
  }


}
