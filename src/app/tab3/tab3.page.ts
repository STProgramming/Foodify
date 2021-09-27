import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  logstatus: string; //stringa titolo
  isLogged = false;
  submitted = false;
  correctUsername = 'administrator';
  correcPassword = 'password';
  incorrectUsername: boolean;
  incorrectPassword: boolean;
  statusUsername: number;
  statusPassword: number;

  public myForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
    this.logstatus = 'Log in';
    this.statusUsername = 1;
    this.statusPassword = 1;
    this.incorrectPassword = false;
    this.incorrectUsername = false;
    localStorage.setItem('authenticated', '0');
  }

  onSubmit() {
    this.submitted = true;
    if (
      this.myForm.value.username === this.correctUsername &&
      this.myForm.value.password === this.correcPassword
    ) {
      localStorage.setItem('authenticated', '1');
      this.isLogged = true;
      this.statusUsername = 1;
      this.statusPassword = 1;
      this.logstatus = 'Log out';
      this.router.navigateByUrl('tabs/tab1');
    } else {
      const username = this.myForm.value.username;
      const password = this.myForm.value.password;
      if (
        username === '' ||
        !(username === this.correctUsername) ||
        password === '' ||
        !(password === this.correcPassword)
      ) {
          if (username !== this.correctUsername) {
            this.incorrectUsername = true;
            this.statusUsername = 0;
          }
          else {
            this.incorrectUsername = false;
            this.statusUsername = 1;
          }
          if (password !== this.correcPassword) {
            this.incorrectPassword = true;
            this.statusPassword = 0;
          }
          else {
            this.incorrectPassword = false;
            this.statusPassword = 1;
          }
          localStorage.setItem('authenticated', '0');
          this.isLogged = false;
      }
    }
  }

  onLogOut() {
    this.isLogged = false;
    localStorage.setItem('authenticated', '0');
    this.logstatus = 'Log in';
    this.router.navigateByUrl('tabs/tab4');
  }
}
