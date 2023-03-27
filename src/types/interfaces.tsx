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
  // surname: string,
  // zipCode: string,
  // birthday: string,
  // deliveryDate: string,
  // country: string,
  // state: string,
  // consent: string,
  // gender: string,
  // notifications: string,
  // picture: string | undefined,
  // errors: {
  //   name: string,
  //   surname: string,
  //   zipCode: string,
  //   birthday: string,
  //   deliveryDate: string,
  //   country: string,
  //   state: string,
  //   consent: string,
  //   gender: string,
  //   notifications: string,
  //   picture: string | undefined,
  // },
  // submitted: boolean,
}

export type CardType = {
  card: ErrorState;
};

export type ErrorState = {
  errorName: boolean;
  // errorBithday: boolean;
  // errorFeature: boolean;
  // errorGender: boolean;
  // errorFile: boolean;
  message: boolean;
};
