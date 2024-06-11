import { Component } from '@angular/core';
import { ButtonComponent } from '../../common/button/button.component';
import { Button } from '../../../models/common/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-alphabet-filters',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './alphabet-filters.component.html',
  styleUrl: './alphabet-filters.component.scss'
})
export class AlphabetFiltersComponent {
  ClassStyles: string = "filter-btn"
  filterLetter: string = ""
  AllBtns: Button[]
  constructor() {
    const btn = new Button({ srcImg: "assests/images/filter.png" });
    this.AllBtns = [btn];
    this.CreateBtns();
  }
  ActivateFilter(filter: string) {
    this.filterLetter = filter;
    console.log(this.filterLetter);
  }
  CreateBtns(): void {
    for (let i = 65; i <= 90; i++) {
      const btn = new Button({ title: String.fromCharCode(i + 32) });
      this.AllBtns.push(btn);
    }
  }
}
