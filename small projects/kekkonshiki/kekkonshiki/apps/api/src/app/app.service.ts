import { Injectable } from '@nestjs/common';
import { Gender, Invite } from '@kekkonshiki/api-interfaces';

@Injectable()
export class AppService {
  getData(inviteCode: string): Invite {
    // here  we will connect to the DB and get the information.
    const invite: Invite = {
      familyName: 'Martins',
      pictures: [],
      welcomeText: 'Sejam bem vindos a vossa pagina gdsfldfsd',
      salutation: 'Ola Nuno e Mariana',
      guests: [{
        firstName: 'Nuno',
        lastName: 'Martins',
        nickname: 'Noites',
        gender: Gender.Male,
        age: 10
      }],
      inviteCode
    }
    return invite;
  }
}
