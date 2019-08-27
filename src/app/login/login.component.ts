import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  model: string = '';
  userName: string = '';
  submitted: string = '';

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const userName = target.querySelector('#userName').value;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    this.Auth.getUserDetails(userName, email, password);
    console.log(userName, email, password);
  }

}
