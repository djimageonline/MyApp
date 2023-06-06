import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };
 
  passwordMatched: boolean = true;

  submit(){

    if (this.form.password !== this.form.confirm_password){
      this.passwordMatched = false;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
    .then((userCredential) => {
      console.log(userCredential)
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    
  }


}
