import {Component, OnInit} from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticateService: AuthenticateService, public router: Router) {
  }

  ngOnInit(): void {
    this.authenticateService.logout();
    this.router.navigate(['login']);
  }

}
