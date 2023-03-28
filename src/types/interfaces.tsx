export type EmptyProps = {
  children?: React.ReactNode;
};

export interface SearchWordInterface {
  searchWord: string;
}

export interface SearchProps {
  callback: (searchWord: string) => void;
}

export interface FormProps {
  name: string;
  birthday: string;
  country: string;
  gender: string;
  notificationsOn: boolean;
  notificationsOff: boolean;
  picture: string | undefined;
}

export type CardType = {
  card: ErrorState;
};

export type ErrorState = {
  errorName: boolean;
  errorBirthday: boolean;
  errorGender: boolean;
  errorNotifications: boolean;
  errorPicture: boolean;
  // errorPictureInput: boolean,
  // errorGenderSwitcher: boolean,
  message: boolean;
};
