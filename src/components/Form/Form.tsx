import React, { Component, RefObject } from 'react';

interface MyFormProps {
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  surname: string;
  zipcode: string;
  birthday: string;
  deliveryDate: string;
  country: string;
  state: string;
  consent: boolean;
  present: string[];
  notifications: boolean;
  profilePic: FileList | null;
}

const x: Array<object> = [];

class Form extends Component<MyFormProps> {
  nameRef: RefObject<HTMLInputElement>;
  surnameRef: RefObject<HTMLInputElement>;
  zipCodeRef: RefObject<HTMLInputElement>;
  birthdayRef: RefObject<HTMLInputElement>;
  deliveryDateRef: RefObject<HTMLInputElement>;
  countryRef: RefObject<HTMLSelectElement>;
  stateRef: RefObject<HTMLSelectElement>;
  consentRef: RefObject<HTMLInputElement>;
  genderRef: RefObject<HTMLInputElement>;
  notificationsRef: RefObject<HTMLInputElement>;
  pictureRef: RefObject<HTMLInputElement>;
  pictureInputRef: RefObject<HTMLInputElement>;
  genderSwitcherRef: RefObject<HTMLInputElement>;

  constructor(props: MyFormProps) {
    super(props);

    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.zipCodeRef = React.createRef();
    this.birthdayRef = React.createRef();
    this.deliveryDateRef = React.createRef();
    this.countryRef = React.createRef();
    this.stateRef = React.createRef();
    this.consentRef = React.createRef();
    this.genderRef = React.createRef();
    this.notificationsRef = React.createRef();
    this.pictureRef = React.createRef();
    this.pictureInputRef = React.createRef();
    this.genderSwitcherRef = React.createRef();
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name: this.nameRef.current?.value,
      surname: this.surnameRef.current?.value,
      zipCode: this.zipCodeRef.current?.value,
      birthday: this.birthdayRef.current?.value,
      deliveryDate: this.deliveryDateRef.current?.value,
      country: this.countryRef.current?.value,
      state: this.stateRef.current?.value,
      consent: this.consentRef.current?.checked,
      gender: this.genderRef.current?.value,
      notifications: this.notificationsRef.current?.checked,
      picture: this.pictureRef.current?.files?.[0] || null,
    };

    x.push(formData);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.nameRef} />
        </label>
        <br />
        <label>
          Surname:
          <input type="text" ref={this.surnameRef} />
        </label>
        <br />
        <label>
          Zip Code:
          <input type="text" ref={this.zipCodeRef} />
        </label>
        <br />
        <label>
          Birthday:
          <input type="date" ref={this.birthdayRef} />
        </label>
        <br />
        <label>
          Delivery Date:
          <input type="date" ref={this.deliveryDateRef} />
        </label>
        <br />
        <label>
          Country:
          <select ref={this.countryRef}>
            <option value="">-- Please select a country --</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
          </select>
        </label>
        <br />
        <label>
          Select state:
          <select ref={this.stateRef}>
            <option value="">-- Please select --</option>
            <option value="New York">New York</option>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
          </select>
        </label>
        <br />
        <label>
          Consent to personal data:
          <input type="checkbox" ref={this.consentRef} />
        </label>
        <br />
        <label>
          Gender:
          <label>
            <input type="radio" value="male" ref={this.genderSwitcherRef} />
            Male
          </label>
          <label>
            <input type="radio" value="female" ref={this.genderSwitcherRef} />
            Female
          </label>
        </label>
        <br />
        <label>
          Profile picture:
          <input type="file" accept="image/*" ref={this.pictureInputRef} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export { x, Form };
