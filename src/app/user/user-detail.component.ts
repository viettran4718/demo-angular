import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from './user.service';
import {IUser} from '../shared/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  user: IUser;
  userId: number;

  constructor(protected activatedRoute: ActivatedRoute,
              private router: Router,
              protected userService: UserService) {
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userId = +params.get('id');
    });
    this.userService.find(this.userId).subscribe((result) => {
      this.user = result.body;
      // console.log(result);
      // console.log(this.user);
    });
  }

  previousState(): void {
    window.history.back();
  }
}
