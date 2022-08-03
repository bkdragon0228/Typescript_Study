// 전화번호
export interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

// 전화 번호부
export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export enum PhoneType {
  Home = 'home',
  Office = 'office',
  studio = 'studio',
}
