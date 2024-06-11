import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../../services/role-service/role.service';
import { Role } from '../../../models/role';
import { CommonModule } from '@angular/common';
import { EmployeeDTO } from '../../../models/employeeDTO';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-roles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './show-roles.component.html',
  styleUrl: './show-roles.component.scss'
})
export class ShowRolesComponent implements OnInit {
  Role: Role[] = []
  employeesAssigned: EmployeeDTO[] = []
  constructor(private roleService: RoleService) {

  }

  ngOnInit(): void {
    this.roleService.getAll().subscribe({
      next: data => this.Role = data
    })
  }

  GetRoleEmployees(): string {
    let imageDivision = `<div class="top"><img src="{{employeeImage}}" height="20px" alt="profile" /></div>`
    let imageCardContainer = this.employeesAssigned?.length > 4 ? `<div class="top"> +${this.employeesAssigned.length - 4}</div>` : "no employees"
    imageCardContainer += this.employeesAssigned.splice(0, 4).map(employee => imageDivision.replace('{{employeeImage}}', employee.image))
    return imageCardContainer;
  }
}
