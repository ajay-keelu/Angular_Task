import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../services/emloyee-service/employee.service';
import { Router, RouterModule } from '@angular/router';
import { AlphabetFiltersComponent } from '../alphabet-filters/alphabet-filters.component';
import { DropdownFiltersComponent } from '../dropdown-filters/dropdown-filters.component';
import { Filters } from '../../../models/common/filter';
import { Option } from '../../../models/common/option';
import { LookupService } from '../../../services/lookup-services/lookup.service';


@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule, RouterModule, AlphabetFiltersComponent, DropdownFiltersComponent],
  providers: [EmployeeService],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent implements OnInit {
  tableData: Employee[] = []
  Locations: Option[] = []
  Departments: Option[] = []
  prevPopUpBtn?: HTMLDivElement | null;
  prevSortBtn?: HTMLImageElement | undefined;

  alphabet: string = ''
  dropdownFilters: Filters = {
    Status: '',
    Department: '',
    Location: ''
  }

  constructor(private empService: EmployeeService, private route: Router, private lookupService: LookupService) {
  }

  ngOnInit(): void {
    this.empService.getAll().subscribe((data) => this.tableData = data)
    this.setDepartments();
    this.setLocations();
  }

  setAlphabetFilter(alphabet: string): void {
    this.alphabet = alphabet;
  }


  sortData(key: keyof Employee, order: string, ele: HTMLImageElement): void {
    this.prevSortBtn ? this.prevSortBtn.style.background = "" : ""
    let sortedData: Employee[] = this.tableData.sort((emp1: Employee, emp2: Employee): number => {
      let employee1: any, employee2: any;
      employee1 = (key.toString() == "firstName" ? `${emp1.firstName} ${emp1.lastName}` : employee1 = emp1[key])?.toString().toLowerCase();
      employee2 = (key.toString() == "firstName" ? `${emp2.firstName} ${emp2.lastName}` : employee2 = emp2[key])?.toString().toLowerCase();
      if (order != "desc")
        return employee1 > employee2 ? 1 : -1;

      return employee1 > employee2 ? -1 : 1;
    });
    this.tableData = sortedData;
    ele.style.background = "rgb(251, 192, 192)"
    this.prevSortBtn = ele;
  }

  routeTo(id: number, mode: string): void {
    this.route.navigateByUrl(`/employee/${id}/${mode}`)
  }

  popUpDisplay(e: any): void {
    e = e.parentNode as HTMLDivElement;
    if (this.prevPopUpBtn && this.prevPopUpBtn == e) {
      this.prevPopUpBtn.classList.toggle("view-toggle"); return;
    }
    e.classList.add("view-toggle");
    this.prevPopUpBtn = e;
  }

  hidePopUp(): void {
    if (this.prevPopUpBtn && this.prevPopUpBtn.classList.contains("view-toggle")) this.prevPopUpBtn.classList.remove("view-toggle");
  }


  setDepartments(): void {
    this.lookupService.getDepartments().subscribe({
      next: (data: Option[]) => {
        this.Departments = data;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  setLocations(): void {
    this.lookupService.getLocations().subscribe((data: Option[]) => {
      this.Locations = data;
    })
  }
}
