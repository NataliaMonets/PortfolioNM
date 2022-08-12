import { Component, OnInit } from '@angular/core';
import { TITLES, SOFTSKILLS, HARDSKILLS, SKILLSIMG } from 'src/app/constans/skills.constans';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  soft = SOFTSKILLS;
  hard = HARDSKILLS;
  title = TITLES;
  skillsImg = SKILLSIMG;
  skillsStatus = true;
  constructor() { }

  ngOnInit(): void {
  }

  switch(status: boolean): void {
    this.skillsStatus = status;
  }
}
