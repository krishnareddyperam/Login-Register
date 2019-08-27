import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: string = '';
  userName: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
   /* onSubmit(form: NgForm) {
   const email = form.value.email;
   const password = form.value.password;

   this.service.register(email, password);
 } */
}
