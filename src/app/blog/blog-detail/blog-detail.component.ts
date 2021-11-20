import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Blog } from 'src/app/shared/blog.model';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blogid:number;
  blog:Blog;
  constructor(private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.blogid = +params['id'];
      this.blog = this.blogService.getBlog(this.blogid);
    });
  }

  onNextBlog(){
    if(this.blogid === this.blogService.getLatestIndexOfBlog()-1){
      alert("This is last blog!");
      return;
    }
    this.router.navigate(['../',this.blogid+1], {relativeTo: this.route});
  }

  onPreviousBlog(){
    if(this.blogid == 0){
      alert("This is first blog!");
      return;
    }
    this.router.navigate(['../',this.blogid-1], {relativeTo: this.route});
  }

}
