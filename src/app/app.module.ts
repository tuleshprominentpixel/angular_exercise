import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AuthService } from './shared/auth.service';
import { EditblogComponent } from './blog/editblog/editblog.component';
import { MyblogComponent } from './blog/myblog/myblog.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    BlogComponent,
    LoginComponent,
    AddBlogComponent,
    BlogDetailComponent,
    BlogListComponent,
    EditblogComponent,
    MyblogComponent,
  ],
  imports: [
 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    BrowserModule,
    CKEditorModule,
    NgMultiSelectDropDownModule.forRoot(),
    InfiniteScrollModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
