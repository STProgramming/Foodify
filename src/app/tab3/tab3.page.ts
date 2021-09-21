import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit { 
  logstatus: string; //stringa titolo
  isLogged: boolean = false;//todo link this variable with the result of log
  submitted: boolean = false;
  correctUsername: string = 'administrator';
  correcPassword: string = 'password';
  
  private myForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(){
    this.myForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.logstatus = 'Log in';
    localStorage.setItem('authenticated', '0');
  }

  OnSubmit(){
    this.submitted = true;
    if(this.myForm.value.username == this.correctUsername && this.myForm.value.password == this.correcPassword){
      localStorage.setItem('authenticated', '1');
      this.isLogged = true;
      this.logstatus = 'Log out';
      this.router.navigateByUrl('tabs/tab1');
    } 
    else{
      localStorage.setItem('authenticated', '0');
      this.isLogged = false;
    }
  }

  OnLogOut(){
    this.isLogged = false;
    localStorage.setItem('authenticated', '0');
    this.logstatus = 'Log in';
    this.router.navigateByUrl('tabs/tab4');
  }
}
