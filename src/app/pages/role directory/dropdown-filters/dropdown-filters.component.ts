import { Component } from '@angular/core';
import { Button } from '../../../models/common/button';
import { ButtonComponent } from '../../common/button/button.component';

@Component({
  selector: 'app-dropdown-filters',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './dropdown-filters.component.html',
  styleUrl: './dropdown-filters.component.scss'
})
export class DropdownFiltersComponent {
  ClassStyles: string = "dropdown-btn-";
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
}
