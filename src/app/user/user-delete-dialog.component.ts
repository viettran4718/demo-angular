import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {UserService} from './user.service';
import {IUser} from '../shared/models/user';

@Component({
  templateUrl: './user-delete-dialog.component.html',
})
export class UserDeleteDialogComponent {
  user?: IUser;

  constructor(protected userService: UserService, public activeModal: NgbActiveModal) {
    console.log(this.user);
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.userService.delete(id).subscribe(() => {
      this.activeModal.close();
      window.location.reload();
    });
  }
}
