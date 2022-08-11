import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public showAbout = false;
  public contactsArr = [
    {
      href: "https://t.me/Natalia_Monets",
      icon: "assets/images/telegram1.svg"
    },
    {
      href: "https://www.linkedin.com/in/natalia-monets-534baa198/",
      icon: "assets/images/social-media-54.svg"
    },
    {
      href: "https://www.facebook.com/nata.monets/",
      icon: "assets/images/social-media-54 (1).svg"
    },
    {
      href: "https://github.com/NataliaMonets",
      icon: "assets/images/social-media-54 (2).svg"
    },
    {
      href: "mailto: nataliia.monets@gmail.com",
      icon: "assets/images/gmail1.svg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(): void {
    this.showAbout = !this.showAbout;
  }
}
