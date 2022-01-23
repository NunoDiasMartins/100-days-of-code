import { Gender, Invite } from "./api-interfaces";

export const mockInvite: Invite = {
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
  inviteCode: '232x2134'
}
