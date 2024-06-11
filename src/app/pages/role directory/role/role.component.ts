import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DropdownFiltersComponent } from '../dropdown-filters/dropdown-filters.component';
import { ShowRolesComponent } from '../show-roles/show-roles.component';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [HeaderComponent, DropdownFiltersComponent,ShowRolesComponent],
  templateUrl: './role.component.html',
  styleUrl: './role.component.scss'
})
export class RoleComponent {

}
