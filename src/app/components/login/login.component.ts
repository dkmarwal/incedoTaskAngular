import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn$: Observable<Boolean>;
  validateErr = false;
 
  //constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.loadLoginForm();
  }

  loadLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  // loadLoginForm() {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  // });
  // }

  onSubmit() {
    if (this.loginForm.valid){
       if(this.loginForm.value.username === 'a' && this.loginForm.value.password === 'a'){
        this.validateErr = false;
        this.auth.setLoggedInVal(true);
       }
       else
        this.validateErr = true; 
    }    
  }

}
