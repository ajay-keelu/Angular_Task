import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Option } from '../../../models/common/option';
import { LookupService } from '../../../services/lookup-services/lookup.service';
import { RoleDTO } from '../../../models/roleDTO';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../../services/emloyee-service/employee.service';
import { RoleService } from '../../../services/role-service/role.service';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

@Component({
  selector: 'app-add-role',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.scss'
})
export class AddRoleComponent implements OnInit {

  role: RoleDTO = new RoleDTO([]);
  id?: number;
  locations: Option[] = [];
  departments: Option[] = [];
  jobTitles: Option[] = [];

  constructor(private lookupService: LookupService, private route: ActivatedRoute, private router: Router, private empService: EmployeeService, private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = parseInt(data.get('id') ?? '0');
      if (this.id != 0)
        this.roleService.getById(this.id).subscribe({
          next: data => { this.role = data }
        })
    })

    this.setDepartments()
    this.setJobtitles();
    this.setLocations()
  }

  setDepartments(): void {
    this.lookupService.getDepartments().subscribe({
      next: (data: Option[]) => {
        this.departments = data;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  setLocations(): void {
    this.lookupService.getLocations().subscribe((data: Option[]) => {
      this.locations = data;
    })
  }

  setJobtitles(): void {
    this.lookupService.getJobtitles().subscribe((data: Option[]) => {
      this.jobTitles = data;
    })
  }

  submitForm(form: NgForm) {
    if (this.role.id && form.valid) {
      this.roleService.update(this.role).subscribe({
        next: () => {
          this.toastToggle('Updated Successfully', 'toast-success', 'assests/images/circle-check.svg');
          setTimeout(() => {
            this.toastToggle("", "toast-success", 'assests/images/circle-check.svg');
          }, 2000)
          setTimeout(() => {
            this.router.navigateByUrl('/role')
          }, 5000)

        }, error: (err: Error) => {
          this.toastToggle(`${err.message}`, 'toast-error', 'assests/images/circle-check.svg');
          setTimeout(() => {
            this.toastToggle("", "toast-error", 'assests/images/circle-xmark.svg');
          }, 2000)
        }
      })
    }
    if (!this.role.id && form.valid) {
      this.roleService.create(this.role).subscribe({
        next: () => {
          this.toastToggle('Created Successfully', 'toast-success', 'assests/images/circle-check.svg');
          setTimeout(() => {
            this.toastToggle("", "toast-success", 'assests/images/circle-check.svg');
          }, 2000);
          setTimeout(() => {
            this.router.navigateByUrl('/role')
          }, 5000)
        },
        error: (err: Error) => {
          this.toastToggle(`${err.message}`, 'toast-error', 'assests/images/circle-check.svg');
          setTimeout(() => {
            this.toastToggle("", "toast-error", 'assests/images/circle-xmark.svg');
          }, 2000)
        }
      })
    }
  }

  toastToggle(message: string, toggleClass: string, image: string): void {
    document.querySelector<Element>(".toast")?.classList.toggle(toggleClass);
    document.querySelector<HTMLDivElement>(".toast .message")!.innerText = message;
    (document.querySelector(".toast .icon img") as HTMLImageElement).src = image;
  }

}
