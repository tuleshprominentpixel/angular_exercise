import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  loginUserName:string;
  subscription: Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.loginUser.subscribe(
      (loginUser) => {
        this.loginUserName = loginUser;
      }
    )
    console.log(this.loginUserName)
  }

  logOut(){
    this.authService.logOut();
  }

  ngOnDestroy(){
    // this.subscription.unsubscribe();
  }


}
