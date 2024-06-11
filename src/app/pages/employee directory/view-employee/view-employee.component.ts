import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LookupService } from '../../../services/lookup-services/lookup.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Option } from '../../../models/common/option';
import { EmployeeService } from '../../../services/emloyee-service/employee.service';
import { EmployeeDTO } from '../../../models/employeeDTO';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.scss'
})
export class ViewEmployeeComponent {
  employee: EmployeeDTO = new EmployeeDTO([]);
  id?: number;
  locations: Option[] = [];
  departments: Option[] = [];
  jobTitles: Option[] = [];
  projects: Option[] = [];

  constructor(private lookupService: LookupService, private route: ActivatedRoute, private empService: EmployeeService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((data) => {
      this.id = parseInt(data.get('id') ?? '0');
      this.empService.getById(this.id).subscribe(data => this.employee = data)
    })

    this.lookupService.getDepartments().subscribe((data: Option[]) => {
      this.departments = data;
    })

    this.lookupService.getLocations().subscribe((data: Option[]) => {
      this.locations = data;
    })

    this.lookupService.getJobtitles().subscribe((data: Option[]) => {
      this.jobTitles = data;
    })

    this.lookupService.getProjects().subscribe((data: Option[]) => {
      this.projects = data;
    })
  }

}
