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

export interface Accommodation {
  name: string;
  description: string;
  url?: string;
  contact: string;
  rangePrice: {
    min: number;
    max: number;
  }
  pictures?: string[];
  distance: string;
  googleMapsUrl: string;
}

export enum Gender {
  Male, Female, Binary
}
