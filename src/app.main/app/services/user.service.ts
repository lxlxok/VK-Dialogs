import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { VKService } from './vk.service';
import { ChromeAPIService } from './chrome-api.service';
import { UserInfo, UserListInfo } from '../datamodels';

@Injectable()
export class UserService {
    constructor(private chromeapi: ChromeAPIService) { }

    getUsers(): Observable<UserListInfo> {
        const o = this.chromeapi.subscribeOnMessage('users_update').map(x => x.data);
        this.chromeapi.PostPortMessage({
            name: 'get_users',
        });
        return o;
    }
}
