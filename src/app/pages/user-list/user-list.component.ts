import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  userList: any[] = [];
  userService = inject(UserService);
  router = inject(Router);
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      this.userList = res.data;
    });
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure want to delete?');
    if (isDelete) {
      this.userService.deleteUserById(id).subscribe((res: any) => {
        if (res.result) {
          this.loadUsers();
        } else {
          alert(res.message);
        }
      });
    }
  }

  onEdit(id: number) {
    this.router.navigate(['/editUser', id]);
  }
}
