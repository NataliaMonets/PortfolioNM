import { Component, OnInit } from '@angular/core';
import { CONTACTS, TEXT } from 'src/app/constans/contacts.constans';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  status = false;
  statusMes = false;
  check!: string;
  contacts = CONTACTS;
  text = TEXT;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  showNumber(): void {
    if (this.check.toLowerCase() != 'i have a job for you') {
      this.statusMes = !this.statusMes;
    }
    else {
      this.status = !this.status;
    }
    this.check = '';
  }

  hideNumber(): void {
    this.status = false;
    this.statusMes = false;
  }
}
