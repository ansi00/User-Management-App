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
  userObj: any = {
    userId: 0,
    fullName: '',
    emailId: '',
    mobileNo: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    profilePicUrl: '',
    password: '',
    role: 'User',
  };

  onSave() {
    this.userService.CreateNewUser(this.userObj).subscribe((res: any) => {
      if (res.result) {
        alert('User created successfully');
      } else {
        alert(res.message);
      }
    });
  }
}
