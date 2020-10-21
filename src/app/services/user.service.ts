import { Injectable, Injector } from '@angular/core';

import { BaseService } from './util/base.service';
import { User } from '../shared/model/current';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  constructor(protected injector: Injector) {
    super(injector, 'users');
   }

   updatePassword(user: User) {
    return this.http.put(`${this.urlResouce}/updatePassword/${user.id}`, user);
  }

}
