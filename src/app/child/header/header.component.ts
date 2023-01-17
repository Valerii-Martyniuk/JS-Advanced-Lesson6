import { Component, OnInit } from '@angular/core';

import { WebDataService } from 'src/app/servises/web-data.service';

import { UserInterface } from '../interface/body.interface';
import { BlogInterface } from '../interface/body.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public users: Array<UserInterface> = [];
  public message: Array<BlogInterface> = [];

  public newUserName: string = '';
  public newUserEmail: string = '';
  public newUserPassword: string = '';
  public SignUpDiv: boolean = false;
  public SignUpBtn: boolean = false;
  public signInBtn: boolean = false;
  public whoUseNow: string = '';
  public whoUseNowAllInfo!: any;
  public newTitle: string = '';
  public newText: string = '';
  public comentDiv: boolean = false;

  constructor(private WebDataService: WebDataService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  CreateUser(): void {
    if (this.users.some((user) => user.email === this.newUserEmail)) {
      alert('have this email');
    } else if (this.users.some((user) => user.username === this.newUserName)) {
      alert('have this name');
    } else {
      let newUser: UserInterface = {
        id: this.users.slice(-1)[0].id + 1,
        username: this.newUserName,
        email: this.newUserEmail,
        password: this.newUserPassword,
      };

      this.users.push(newUser);
      this.reset();
    }
  }
  LogIn(): void {
    if (
      this.users.some((user) => user.email === this.newUserEmail) &&
      this.users.some((user) => user.password === this.newUserPassword)
    ) {
      let index = this.users.findIndex(
        (user) => user.email === this.newUserEmail
      );
      this.whoUseNow = this.users[index].username;
      this.whoUseNowAllInfo = this.users[index];
      this.WebDataService.whoUseNowAllInfo = this.users[index];
      this.reset();
    } else {
      alert('folse data');
    }
  }

  getUsers(): void {
    this.users = this.WebDataService.getUsers();
    this.message = this.WebDataService.getMessage();
  }

  addPost(): void {
    let newMessage: BlogInterface = {
      id: this.whoUseNowAllInfo.id,
      postedBy: this.whoUseNowAllInfo.username,
      topic: this.newTitle,
      date: new Date(),
      message: this.newText,
    };
    this.message.push(newMessage);
    this.comentDiv = false;
    this.newText = '';
    this.newTitle = '';
  }
  closePost(): void {
    this.reset();
  }
  reloadWhoUse(): void {
    this.whoUseNow = '';
    this.WebDataService.whoUseNowAllInfo = { id: 0 };
  }

  reset(): void {
    this.newUserName = '';
    this.newUserEmail = '';
    this.newUserPassword = '';
    this.SignUpDiv = false;
    this.SignUpBtn = false;
    this.signInBtn = false;

    this.comentDiv = false;
    this.newText = '';
    this.newTitle = '';
  }
}
