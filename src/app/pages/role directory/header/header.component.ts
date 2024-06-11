import { Component } from '@angular/core';
import { Button } from '../../../models/common/button';
import { ButtonComponent } from '../../common/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private route: Router) { }
  Btn: string = "default";

  addRoleBtn: Button = {
    srcImg: "assests/images/add.svg",
    altImg: "Add Role",
    title: "Add Role",
    fontColor: "#fff",
    background: "rgb(244, 72, 72)",
  }

  navigation() {
    this.route.navigateByUrl('/role/add-role');
  }



}
