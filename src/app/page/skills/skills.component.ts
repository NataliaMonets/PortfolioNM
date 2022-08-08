import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public statusH = true;
  public statusS = false;
  public q = document.getElementById('skillsH1')?.offsetTop;

  constructor() { }

  ngOnInit(): void {
  }

  switchToSoft(): void {
    this.statusS = true;
    this.statusH = false;
  }

  switchToHard(): void {
    this.statusH = true;
    this.statusS = false;
  }
}
