import { Component, OnInit } from '@angular/core';
import { TITLE, PROGECTS } from 'src/app/constans/progects.constans';

@Component({
  selector: 'app-progects',
  templateUrl: './progects.component.html',
  styleUrls: ['./progects.component.scss']
})
export class ProgectsComponent implements OnInit {
  title = TITLE;
  progects = PROGECTS;
  constructor() { }

  ngOnInit(): void {
  }

}
