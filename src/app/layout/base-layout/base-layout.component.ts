import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  @Input() entity: any = undefined;
  @Input() titletop: string;

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
