import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  userService = inject(UserService);
  loggedUserId: number = 0;
  userObj: any = {
    userId: 0,
    fullName: '',
    emailId: '',
    mobileNo: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    password: '',
    role: 'User',
  };

  constructor() {
    const loggedUser = localStorage.getItem('userApp');
    if (loggedUser) {
      const parseData = JSON.parse(loggedUser);
      if (parseData.role == 'User') {
        this.loggedUserId = parseData.userId;
        this.getUserById();
      }
    }
  }

  getUserById() {
    this.userService.GetUserById(this.loggedUserId).subscribe((res: any) => {
      this.userObj = res.data;
    });
  }

  onSave() {
    this.userService.CreateNewUser(this.userObj).subscribe((res: any) => {
      if (res.result) {
        alert('User created successfully');
      } else {
        alert(res.message);
      }
    });
  }

  onUpdate() {
    this.userService.UpdateUser(this.userObj).subscribe((res: any) => {
      if (res.result) {
        alert('User updated successfully');
      } else {
        alert(res.message);
      }
    });
  }
}
