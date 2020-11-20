import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticateService} from '../authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder,
              private authenticateService: AuthenticateService,
              private router: Router) {
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
    const userAuthen = this.authenticateService.authenticate(
      this.loginForm.controls['username'].value,
      this.loginForm.controls['password'].value
    );

    if (userAuthen) {
      this.router.navigate(['/']);
    } else {
      alert('Đăng nhập thất bại');
    }
  }


}
