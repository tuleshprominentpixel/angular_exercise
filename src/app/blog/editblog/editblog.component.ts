import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from 'src/app/shared/auth.service';
import { BlogService } from 'src/app/shared/blog.service';
import { NgForm } from '@angular/forms';
import { Blog } from 'src/app/shared/blog.model';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  @ViewChild('f') updateForm: NgForm;
  public Editor = ClassicEditor;
  author:string;
  id: number;
  title: string="bbb";
  titles: string="bbb";
  date1:Date ;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  editMode = false;
  blogCurrent:Blog;
  constructor(private router:Router,
    private blogService:BlogService,private auth:AuthService,
    private route:ActivatedRoute) {
      // this.date1=new Date();  
     }

  ngOnInit(): void {
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'html' },
    //   { item_id: 2, item_text: 'css' },
    //   { item_id: 3, item_text: 'javascript' },
    //   { item_id: 4, item_text: 'angular' },
    //   { item_id: 5, item_text: 'reactJs' },
    //   { item_id: 6, item_text: 'PHP' },
    // ];
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true,
    // };
    this.dropdownList = [
      { item_id: 1, item_text: 'html' },
      { item_id: 2, item_text: 'css' },
      { item_id: 3, item_text: 'javascript' },
      { item_id: 4, item_text: 'angular' },
      { item_id: 5, item_text: 'reactJs' },
      { item_id: 6, item_text: 'PHP' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.author=(this.auth.loginUserNameOrEmail);
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      this.blogCurrent=this.blogService.getBlog(this.id);
      this.title=this.blogCurrent.title;
      this.selectedItems=this.blogCurrent.language;
      this.date1=this.blogCurrent.date;
      console.log(this.selectedItems +" date "+this.date1);
    });
  }


  onSelectAll(items: any) {
    console.log(items);
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  private initForm() {
   
    if (this.editMode) {
      const blog = this.blogService.getBlog(this.id);
      // this.title = blog.title.toString();
      console.log(blog);
   
    }
  }
  onEditBlogSubmit() {
    // console.log(this.updateForm.value);
    this.blogService.updateBlogs(this.id, this.updateForm.value);
    this.router.navigate(['/blog/']);
  }
}
