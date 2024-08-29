import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';
// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
// import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-project';
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id == this.selectedUserId)
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
