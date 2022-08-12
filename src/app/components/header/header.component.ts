import { Component, OnInit } from '@angular/core';
import { NAV, IMAGES } from 'src/app/constans/header.constans';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  images = IMAGES;
  navArr = NAV;
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNav(): void {
    this.show = !this.show;
  }
}
