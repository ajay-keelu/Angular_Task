import { Component } from '@angular/core';
import { ButtonComponent } from '../../common/button/button.component';
import { Button } from '../../../models/common/button';
// import { Router } from 'express';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  exportBtn: Button = {
    srcImg: "assests/images/upload.png",
    altImg: "Export data",
    title: "export",
    fontColor: "",
    background: "#fff"
  }

  Btn: string = "default";

  navigation() {
    this.router.navigateByUrl('/employee/add-employee')
  }

  addEmpBtn: Button = {
    srcImg: "assests/images/add.svg",
    altImg: "Add Employee",
    title: "Add Employee",
    fontColor: "#fff",
    background: "rgb(244, 72, 72)",
  }
}
