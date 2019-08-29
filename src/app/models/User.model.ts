import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class User {

    constructor(

        public firstName: string,
        public lastName: string,
        public email: string,
        public passwood: string

    ) {  }

}

@Injectable({

    providedIn: 'root'

})

export class UserAdapter implements Adapter<User> {

    adapt(item: any): User {

        return new User(

            item.firstName,
            item.lastName,
            item.email,
            item.passwood

        );

    }

}
