import { Component, OnInit } from '@angular/core';
import { TITLE, IMG, EDUCATION } from 'src/app/constans/education.constans';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  title = TITLE;
  img = IMG;
  education = EDUCATION;

  constructor() { }

  ngOnInit(): void {
  }

}
