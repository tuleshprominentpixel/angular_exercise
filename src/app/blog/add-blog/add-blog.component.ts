import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Component, OnInit, Query, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BlogService } from 'src/app/shared/blog.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Subject } from 'rxjs';
import { MultiSelect, CheckBoxSelection, FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { query } from '@angular/animations';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  
  imageUrl: string;
  author:string;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  public Editor = ClassicEditor;
  @ViewChild('f') loginForm:NgForm;
  constructor(private router:Router,
    private blogService:BlogService,private auth:AuthService) { }

  ngOnInit(): void {
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
    console.log(this.author)


  }

  

  onSelectAll(items: any) {
    console.log(items);
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onNewBlogSubmit(){
    console.log(this.loginForm.value);
    let id=this.blogService.getLatestIndexOfBlog();
    let date=this.loginForm.value.date;
    let description=this.loginForm.value.description;
    console.log(this.loginForm.value.language);
    //return;
    let a=this.blogService.addBlog({
      ...this.loginForm.value,
      description:description,
      id: id,
      date: date,
      publishBy: this.author,
    });
    // this.blo
    console.log(a)
    console.log(description)
    console.log(this.blogService.getBlogs())
    this.router.navigate(['../']);


  }
}
