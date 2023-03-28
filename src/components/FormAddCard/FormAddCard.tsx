import React, { Component, RefObject } from 'react';
import { FormProps } from '../../types/interfaces';
import './FormAddCard.css';

type ComponentProps = {
  onSubmit: (data: FormProps) => void;
};

type ComponentState = {
  errorName: boolean;
  errorBirthday: boolean;
  errorGender: boolean;
  errorNotifications: boolean;
  errorPicture: boolean;
  message: boolean;
};

export default class FormAddCard extends Component<ComponentProps, ComponentState> {
  private formLink: React.RefObject<HTMLFormElement>;
  private name: RefObject<HTMLInputElement>;
  private birthday: RefObject<HTMLInputElement>;
  private country: RefObject<HTMLSelectElement>;
  private genderM: RefObject<HTMLInputElement>;
  private genderW: RefObject<HTMLInputElement>;
  private notificationsOn: RefObject<HTMLInputElement>;
  private notificationsOff: RefObject<HTMLInputElement>;
  private picture: RefObject<HTMLInputElement>;
  constructor(props: ComponentProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formLink = React.createRef();
    this.name = React.createRef();
    this.birthday = React.createRef();
    this.country = React.createRef();
    this.genderM = React.createRef();
    this.genderW = React.createRef();
    this.notificationsOn = React.createRef();
    this.notificationsOff = React.createRef();
    this.picture = React.createRef();

    this.state = {
      errorName: false,
      errorBirthday: false,
      errorGender: false,
      errorNotifications: false,
      errorPicture: false,
      message: false,
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { onSubmit } = this.props;

    this.validateInputs(() => {
      const { errorName, errorBirthday, errorGender, errorNotifications, errorPicture } =
        this.state;

      if (!errorName && !errorBirthday && !errorGender && !errorNotifications && !errorPicture) {
        this.setState({ message: true });
        setTimeout(() => {
          this.setState({ message: false });
          const gender = this.genderM.current!.checked ? 'man' : 'woman';
          onSubmit({
            name: this.name.current!.value,
            birthday: this.birthday.current!.value,
            country: this.country.current!.value,
            gender,
            notificationsOn: this.notificationsOn.current!.checked,
            notificationsOff: this.notificationsOff.current!.checked,
            picture: URL.createObjectURL(this.picture.current!.files![0]),
          });
          this.formLink.current?.reset();
        }, 500);
      }
    });
  };

  validateInputs(callback: () => void) {
    const gender = this.genderM.current!.checked || this.genderW.current!.checked;
    const notifications =
      this.notificationsOn.current!.checked || this.notificationsOff.current!.checked;

    this.setState(
      {
        errorName: !this.name.current!.value,
        errorBirthday: !this.birthday.current!.value,
        errorGender: !gender,
        errorNotifications: !notifications,
        errorPicture: !this.picture.current!.files![0],
      },
      callback
    );
  }

  render() {
    const { errorName, errorBirthday, errorGender, errorNotifications, errorPicture, message } =
      this.state;

    return (
      <>
        {message ? <div className="message">card added</div> : null}

        <form className="form" ref={this.formLink} onSubmit={this.handleSubmit}>
          <label className="form__label" htmlFor="name">
            name &nbsp;
            <input id="name" type="text" name="name" ref={this.name} placeholder="your name" />
          </label>
          {errorName ? <div className="error-message">Please add your name</div> : null}

          <label className="form__label" htmlFor="birthday">
            birthday &nbsp;
            <input
              id="birthday"
              type="text"
              name="birthday"
              ref={this.birthday}
              placeholder="your birthday"
            />
          </label>
          {errorBirthday ? <div className="error-message">Please add your birthday</div> : null}

          <fieldset className="form__label">
            Select your gender:
            <label htmlFor="man">
              male
              <input type="radio" id="man" name="gender" value="man" ref={this.genderM} />
            </label>
            <label htmlFor="woman">
              female
              <input type="radio" id="woman" name="gender" value="woman" ref={this.genderW} />
            </label>
          </fieldset>
          {errorGender ? <div className="error-message">Please select your gender</div> : null}

          <label className="form__label" htmlFor="country">
            choose a country:
            <select id="country" name="country" ref={this.country}>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
            </select>
          </label>

          <div className="form__label">
            Do you agree for notifications:
            <label htmlFor="notificationsOn">
              Yes
              <input
                type="checkbox"
                id="notificationsOn"
                name="scales"
                ref={this.notificationsOn}
              />
            </label>
            <label htmlFor="notificationsOff">
              No
              <input
                type="checkbox"
                id="notificationsOff"
                name="horns"
                ref={this.notificationsOff}
              />
            </label>
          </div>
          {errorNotifications ? (
            <div className="error-message">Please choose one option</div>
          ) : null}

          <input
            type="file"
            name="picture"
            id="picture"
            accept="image/png, image/jpeg"
            ref={this.picture}
          />

          {errorPicture ? <div className="error-message">Please choose picture</div> : null}

          <button type="submit" className="form__btn">
            CREATE
          </button>
        </form>
      </>
    );
  }
}
