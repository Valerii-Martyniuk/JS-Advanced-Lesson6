import { Injectable } from '@angular/core';
import { UserInterface } from '../child/interface/body.interface';
import { BlogInterface } from '../child/interface/body.interface';

@Injectable({
  providedIn: 'root',
})
export class WebDataService {
  private message: Array<BlogInterface> = [
    {
      id: 1,
      postedBy: 'admin',
      topic: 'about1',
      date: new Date(),
      message: 'I like traveling',
    },
    {
      id: 2,
      postedBy: 'User',
      topic: 'about2',
      date: new Date(),
      message: 'I like traveling',
    },
    {
      id: 1,
      postedBy: 'admin',
      topic: 'about3',
      date: new Date(),
      message: 'I like traveling',
    },
  ];
  private users: Array<UserInterface> = [
    {
      id: 1,
      username: 'Admin',
      email: 'admin',
      password: 'admin',
    },
  ];
  public whoUseNowAllInfo: any = { id: 0 };

  constructor() {}
  getUsers(): Array<UserInterface> {
    return this.users;
  }
  getMessage(): Array<BlogInterface> {
    return this.message;
  }
}
