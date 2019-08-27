// import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  /* register(email: string, password: string) {

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      onrejected error => console.log('Error Happened');
     );
} */

  constructor(private http: HttpClient) { }

  getUserDetails(userName, email, password) {
    return this.http.post('/api/auth.php', {
      userName, email, password }).subscribe(data => {
        console.log(data);
      } );
  }

}


