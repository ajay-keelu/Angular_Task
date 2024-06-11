import { Component } from '@angular/core';
import { Button } from '../../../models/common/button';
import { ButtonComponent } from '../../common/button/button.component';

@Component({
  selector: 'app-show-assigned-employees',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './show-assigned-employees.component.html',
  styleUrl: './show-assigned-employees.component.scss'
})
export class ShowAssignedEmployeesComponent {
  Btn: string = "default";
  addEmpBtn: Button = {
    srcImg: "assests/images/add.svg",
    altImg: "Add Employee",
    title: "Add Employee",
    fontColor: "#fff",
    background: "rgb(244, 72, 72)",
  }
}
