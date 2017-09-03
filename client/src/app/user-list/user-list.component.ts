import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<any>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      data => {
        this.users = data;
      },
      error => console.log(error)
    )
  }

}
