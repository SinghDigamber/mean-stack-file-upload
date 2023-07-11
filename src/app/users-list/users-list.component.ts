import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../shared/file-upload.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  Users: any = [];

  constructor(public fileUploadService: FileUploadService) {
    this.getUsers();
  }

  ngOnInit() {}

  getUsers() {
    this.fileUploadService.getUsers().subscribe((res) => {
      this.Users = res['users'];
    });
  }
}
