export interface Invite {
  familyName: string;
  pictures: string[];
  welcomeText: string;
  salutation: string;
  guests: Guest[];
  inviteCode: string;
}

export interface Guest {
  firstName: string;
  lastName: string;
  nickname?: string;
  gender: Gender;
  age: number
}

export enum Gender {
  Male, Female, Binary
}
