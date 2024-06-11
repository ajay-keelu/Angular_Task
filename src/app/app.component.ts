import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './pages/common/sidebar/sidebar.component';
import { TopnavComponent } from './pages/common/topnav/topnav.component';
import { EmployeeComponent } from './pages/employee directory/employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopnavComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EmployeeDirectory';

}
