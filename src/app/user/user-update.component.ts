import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {UserService} from './user.service';
import {LIST_ROLE} from '../shared/constant/common-variable.constant';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
})
export class UserUpdateComponent implements OnInit {
  isSaving = false;
  submitted = false;
  loading = false;
  listRole: any[] = LIST_ROLE;
  user;
  userId;
  editForm = this.fb.group({
    id: [],
    username: ['', Validators.required],
    fullname: ['', Validators.required],
    phoneNumber: [],
    email: ['', Validators.email],
    birthday: [],
    isApproved: [],
    isDeleted: [],
    // role: [Validators.required],
  });

  constructor(protected activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              protected userService: UserService) {
  }

  // resolve(route: ActivatedRouteSnapshot): Observable<IUser> | Observable<never> {
  //   if (this.userId) {
  //     return this.userService.find(this.userId).pipe(
  //       flatMap((employee: HttpResponse<User>) => {
  //         if (employee.body) {
  //           return of(employee.body);
  //         } else {
  //           this.router.navigate(['404']);
  //           return this.userId;
  //         }
  //       })
  //     );
  //   }
  //   return of(new User());
  // }

  get f() {
    return this.editForm.controls;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
    });
    this.userService.find(this.userId).subscribe((result) => {
      this.user = result.body;
      // console.log(result);
      console.log(this.user);
      this.updateForm(this.user);
    });
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
    this.subscribeToSaveResponse(this.userService.update(user));
  }

  updateForm(user: IUser): void {
    this.editForm.patchValue({
      id: user.id,
      username: user.username,
      password: user.password,
      fullname: user.fullname,
      phoneNumber: user.phoneNumber,
      email: user.email,
      isApproved: user.isApproved,
      isDeleted: user.isDeleted,
    });
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IUser>>): void {
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

  private createFromForm(): IUser {
    return {
      ...new User(),
      id: this.editForm.get(['id'])!.value,
      username: this.editForm.get(['username'])!.value,
      fullname: this.editForm.get(['fullname'])!.value,
      phoneNumber: this.editForm.get(['phoneNumber'])!.value,
      email: this.editForm.get(['email'])!.value,
      isApproved: this.editForm.get(['isApproved'])!.value,
      isDeleted: this.editForm.get(['isDeleted'])!.value,
      birthday: this.editForm.get(['birthday'])!.value,
      // role: this.editForm.get(['role'])!.value,
    };
  }
}
