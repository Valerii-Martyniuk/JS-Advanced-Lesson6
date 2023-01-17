import { Component, DoCheck, OnInit } from '@angular/core';
import { WebDataService } from 'src/app/servises/web-data.service';
import { BlogInterface } from '../interface/body.interface';
import { UserInterface } from '../interface/body.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit, DoCheck {
  public message: Array<BlogInterface> = [];
  public users: Array<UserInterface> = [];

  public whoUseNowAllInfo!: any;
  public editTitle!: string;
  public editText!: string;
  public editNumber!: number;
  public editDiv = false;

  constructor(private WebDataService: WebDataService) {}

  ngOnInit(): void {
    this.whoUseNowAllInfo = this.WebDataService.whoUseNowAllInfo;

    this.getMessage();
    this.getUsers();
  }
  ngDoCheck(): void {
    this.whoUseNowAllInfo = this.WebDataService.whoUseNowAllInfo;
  }

  getMessage(): void {
    this.message = this.WebDataService.getMessage();
  }
  getUsers(): void {
    this.users = this.WebDataService.getUsers();
  }
  deleteMessage(i: number): void {
    this.message.splice(i, 1);
  }
  editMessage(i: number): void {
    this.editTitle = this.message[i].topic;
    this.editText = this.message[i].message;
    this.editNumber = i;
    this.editDiv = true;
  }
  editPost(): void {
    this.message[this.editNumber].topic = this.editTitle;
    this.message[this.editNumber].message = this.editText;
    this.editDiv = false;
    this.editTitle = '';
    this.editText = '';
  }
}
