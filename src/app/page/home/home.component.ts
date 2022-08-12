import { Component, OnInit } from '@angular/core';
import { CONTACTS } from 'src/app/constans/contacts.constans';
import { ABOUT, SHAPES } from 'src/app/constans/home.constans';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showAbout = false;
  contacts = CONTACTS; 
  shapes = SHAPES;
  about = ABOUT;

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(): void {
    this.showAbout = !this.showAbout;
  }
}
