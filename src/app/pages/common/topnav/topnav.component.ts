import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss'
})
export class TopnavComponent {
  ImgSrc: string = "assests/images/upload.png";
  ImgAlt: string = "Export";
  Color: string = "White";
  Background: string = "Red";
  Print() {
    console.log("Button clicked");
  }
}
