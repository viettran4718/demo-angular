import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {UserService} from './user.service';
import {LIST_ROLE} from '../shared/constant/common-variable.constant';
import {IUserRegister, UserRegister} from '../shared/models/user-register';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-add.component.html',
})
export class UserAddComponent implements OnInit {
  isSaving = false;
  submitted = false;
  loading = false;
  listRole: any[] = LIST_ROLE;
  editForm = this.fb.group({
    id: [],
    username: ['', Validators.required],
    fullname: ['', Validators.required],
    password: ['', Validators.required],
    // matchPassword: ['', Validators.required],
    phoneNumber: [],
    email: ['', Validators.email],
    birthday: [],
    role: [Validators.required],
  });

  constructor(protected activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              protected userService: UserService) {
  }

  get f() {
    return this.editForm.controls;
  }

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(({user}) => {
    //   this.updateForm(user);
    // });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    if (this.editForm.invalid) {
      return;
    }
    this.isSaving = true;
    const user = this.createFromForm();
    this.subscribeToSaveResponse(this.userService.create(user));
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IUserRegister>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  // updateForm(user: IUserRegister): void {
  //   this.editForm.patchValue({
  //     id: user.id,
  //     username: user.username,
  //     password: user.password,
  //     fullname: user.fullname
  //   });
  // }

  private createFromForm(): IUserRegister {
    return {
      ...new UserRegister(),
      username: this.editForm.get(['username'])!.value,
      fullname: this.editForm.get(['fullname'])!.value,
      password: this.editForm.get(['password'])!.value,
      phoneNumber: this.editForm.get(['phoneNumber'])!.value,
      email: this.editForm.get(['email'])!.value,
      birthday: this.editForm.get(['birthday'])!.value,
      role: this.editForm.get(['role'])!.value,
    };
  }
}
