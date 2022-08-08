import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public status = false;
  public statusMes = false;
  public check!: string;

  constructor() { }

  ngOnInit(): void {
  }

  showNumber(): void {
    if (this.check.toLocaleLowerCase() != 'i have a job for you') {
      this.statusMes = !this.statusMes;
    }
    else {
      this.status = !this.status;
    }
    this.check = '';
  }

  retInput(): void {
    this.status = false;
    this.statusMes = false;
  }
}
