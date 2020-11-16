import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get f() {

    return this.loginForm.controls;
  }

  ngOnInit(): void {

  }

  onSubmit() {

  }


}
