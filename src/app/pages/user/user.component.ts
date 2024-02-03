import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';

import type { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatPaginator,
    MatCardModule,
    MatIcon,
    MatButtonToggleModule,
    MatGridListModule,
  ],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements AfterViewInit {
  userListView: boolean = true;
  userCount: number = 0;
  displayedColumns: string[] = ['id', 'name', 'phone', 'email'];
  dataSource = new MatTableDataSource<User>();

  constructor(private service: UserService, private cd: ChangeDetectorRef) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.userListView = true;
    this.getUserList();
    this.cd.detectChanges();
  }

  changeUserView($event: any) {
    this.getUserList();
    this.userListView = $event.value;
  }

  getUserList() {
    this.service.getUsers().subscribe({
      next: (users) => {
        this.userCount = users.length;
        this.dataSource.data = users;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
