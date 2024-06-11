import { Component, DoCheck, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Option } from '../../../models/common/option';
import { LookupService } from '../../../services/lookup-services/lookup.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../../services/emloyee-service/employee.service';
import { EmployeeDTO } from '../../../models/employeeDTO';
import { RoleService } from '../../../services/role-service/role.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit {
  employee: EmployeeDTO = new EmployeeDTO([]);
  id?: number;
  locations: Option[] = [];
  departments: Option[] = [];
  jobTitles: Option[] = [];
  projects: Option[] = [];

  constructor(private lookupService: LookupService, private route: ActivatedRoute, private router: Router, private empService: EmployeeService, private roleService: RoleService) {
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = parseInt(data.get('id') ?? '0');
      if (this.id != 0)
        this.empService.getById(this.id).subscribe({
          next: data => this.employee = data
        })
    })
    this.setDepartments()
    this.setLocations()
    this.setJobtitles()
    this.setProjects()
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
    this.roleService.getAllOptions().subscribe((data: Option[]) => {
      this.jobTitles = data;
    })
  }

  setProjects() {
    this.lookupService.getProjects().subscribe((data: Option[]) => {
      this.projects = data;
    })
  }

  submitForm(form: NgForm): void {
    if (this.employee.id && form.valid) {
      this.empService.update(this.employee).subscribe({
        next: () => {
          this.toastToggle('Updated Successfully', 'toast-success', 'assests/images/circle-check.svg');
          setTimeout(() => {
            this.toastToggle("", "toast-success", 'assests/images/circle-check.svg');
            this.router.navigateByUrl('/employee');
          }, 2000)

        }, error: (err: Error) => {
          this.toastToggle(`${err.message}`, 'toast-error', 'assests/images/circle-check.svg');
          setTimeout(() => {
            this.toastToggle("", "toast-error", 'assests/images/circle-xmark.svg');
            this.router.navigateByUrl('/employee');
          }, 2000)
        }
      })
    }
    if (form.valid) {
      this.empService.create(this.employee);
      this.router.navigateByUrl('/employee');
    }
  }

  toastToggle(message: string, toggleClass: string, image: string): void {
    document.querySelector<Element>(".toast")?.classList.toggle(toggleClass);
    document.querySelector<HTMLDivElement>(".toast .message")!.innerText = message;
    (document.querySelector(".toast .icon img") as HTMLImageElement).src = image;
  }

  getImage(imagedata: HTMLInputElement | any): void {
    let reader: FileReader = new FileReader();

    if (imagedata.files[0].size > 1048576) {

      this.toastToggle("Please upload file less then 1mb !", "toast-error", 'assests/images/circle-xmark.svg');
      setTimeout(() => {
        this.toastToggle("", "toast-error", 'assests/images/circle-xmark.svg');
      }, 2000)
      return;
    }
    reader.readAsDataURL(imagedata.files[0]);
    reader.onload = () => {
      (document.querySelector(".left-wrapper .img-wrapper img") as HTMLImageElement).src = reader.result as string;
      this.employee.image = reader.result as string;
    };
    reader.onerror = () => {
      this.toastToggle("Please upload the image again!", "toast-error", 'assests/images/circle-xmark.svg');
      setTimeout(() => {
        this.toastToggle("", "toast-error", 'assests/images/circle-xmark.svg');
      }, 2000)
    }
  };
}
