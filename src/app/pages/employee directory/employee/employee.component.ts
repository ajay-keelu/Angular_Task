import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AlphabetFiltersComponent } from '../alphabet-filters/alphabet-filters.component';
import { DropdownFiltersComponent } from '../dropdown-filters/dropdown-filters.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [HeaderComponent, AlphabetFiltersComponent, DropdownFiltersComponent, EmployeeTableComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {

  id?: any

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe((data) => {
      this.id = data.get('id');
    })
  
  }

}
