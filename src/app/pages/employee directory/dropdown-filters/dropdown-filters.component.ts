import { Component, Input } from '@angular/core';
import { Button } from '../../../models/common/button';
import { ButtonComponent } from '../../common/button/button.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Option } from '../../../models/common/option';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown-filters',
  standalone: true,
  imports: [ButtonComponent, FormsModule, CommonModule],
  templateUrl: './dropdown-filters.component.html',
  styleUrl: './dropdown-filters.component.scss'
})
export class DropdownFiltersComponent {
  @Input() Locations: Option[] | undefined;
  @Input() Departments: Option[] | undefined;
  @Input() Status: Option[];

  constructor() {
    this.Status = [{ key: 1, label: 'Active' }, { key: 0, label: 'In Active' }]
  }
  ClassStyles: string = "dropdown-btn-";
  filters = {
    Status: "",
    Department: "",
    Location: ""
  }
  resetBtn: Button = {
    title: 'Reset',
    srcImg: '',
    altImg: '',
    actionMethod: () => { },
    fontColor: '',
    background: ''
  }

  applyBtn: Button = {
    title: 'Apply',
    srcImg: '',
    altImg: '',
    actionMethod: () => { },
    fontColor: '',
    background: ''
  }

  resetForm() {
    this.filters = {
      Status: "",
      Department: "",
      Location: ""
    }
  }
}
