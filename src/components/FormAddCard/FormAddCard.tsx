import React, { Component, RefObject } from 'react';
import { FormProps } from '../../types/interfaces';
import './FormAddCard.css';

type ComponentProps = {
  onSubmit: (data: FormProps) => void;
};

type ComponentState = {
  errorName: boolean;
  message: boolean;
};

class FormAddCard extends Component<ComponentProps, ComponentState> {
  private formLink: React.RefObject<HTMLFormElement>;
  private name: RefObject<HTMLInputElement>;
  // private surnameRef: RefObject<HTMLInputElement>;
  // private zipCodeRef: RefObject<HTMLInputElement>;
  // private birthdayRef: RefObject<HTMLInputElement>;
  // private deliveryDateRef: RefObject<HTMLInputElement>;
  // private countryRef: RefObject<HTMLSelectElement>;
  // private stateRef: RefObject<HTMLSelectElement>;
  // private consentRef: RefObject<HTMLInputElement>;
  // private genderRef: RefObject<HTMLInputElement>;
  // private notificationsRef: RefObject<HTMLInputElement>;
  // private pictureRef: RefObject<HTMLInputElement>;
  // private pictureInputRef: RefObject<HTMLInputElement>;
  // private genderSwitcherRef: RefObject<HTMLInputElement>;

  constructor(props: ComponentProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formLink = React.createRef();
    this.name = React.createRef();

    this.state = {
      errorName: false,
      message: false,
    };
  }

  // this.state = {
  //     errorName: false,
  // errorBithday: false,
  // errorFeature: false,
  // errorGender: false,
  // errorFile: false,
  // message: false,
  // };
  // this.state = {
  //     name: '',
  // surname: '',
  // zipCode: '',
  // birthday: '',
  // deliveryDate: '',
  // country: '',
  // state: '',
  // consent: '',
  // gender: '',
  // notifications: '',
  // picture: '',
  // errors: {
  //     name: '',
  //     surname: '',
  //     zipCode: '',
  //     birthday: '',
  //     deliveryDate: '',
  //     country: '',
  //     state: '',
  //     consent: '',
  //     gender: '',
  //     notifications: '',
  //     picture: '',
  // },
  // submitted: false,
  // };

  // this.surnameRef = React.createRef();
  // this.zipCodeRef = React.createRef();
  // this.birthdayRef = React.createRef();
  // this.deliveryDateRef = React.createRef();
  // this.countryRef = React.createRef();
  // this.stateRef = React.createRef();
  // this.consentRef = React.createRef();
  // this.genderRef = React.createRef();
  // this.notificationsRef = React.createRef();
  // this.pictureRef = React.createRef();
  // this.pictureInputRef = React.createRef();
  // this.genderSwitcherRef = React.createRef();

  // }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { onSubmit } = this.props;

    this.validateInputs(() => {
      const { errorName } = this.state;

      if (!errorName) {
        this.setState({ message: true });
        setTimeout(() => {
          this.setState({ message: false });
          onSubmit({
            name: this.name.current!.value,
          });
          this.formLink.current?.reset();
        }, 500);
      }
    });
  };

  validateInputs(callback: () => void) {
    this.setState(
      {
        errorName: !this.name.current!.value,
      },
      callback
    );
  }

  // const { name,
  //     // surname,  zipCode,
  //     // birthday,
  //     // deliveryDate,
  //     // country,
  //     // state,
  //     // consent,
  //     // gender,
  //     // notifications,
  //     // picture,
  // } = this.state;

  // if (!name
  //
  //     //|| !surname /*|| !switcher || !date || !file*/
  // ) {
  //     alert('Please fill out all fields.');
  //     return;
  // }
  // if (name && !/^[A-Z][a-z]*$/.test(name)) {
  //     alert('First name must start with an uppercase letter.');
  //     if (this.nameInput) {
  //         this.nameInput.current?.focus();
  //     }
  //     return;
  // }
  // // if (!/^[A-Z][a-z]*$/.test(surname)) {
  // //     alert('Last name must start with an uppercased letter.');
  // //     if (surname && !/^[A-Z][a-z]*$/.test(surname)) {
  // //         alert('First name must start with an uppercased letter.');
  // //         if (this.surnameInput) {
  // //             this.surnameInput.current?.focus();
  // //         }
  // //         return;
  // //     }}
  //
  // this.setState({...this.state, cards: [{name: this.state.name, surname: this.state.surname, date: this.state.date, country: this.state.selection, gender: this.state.switcher}]})
  //
  // if (this.props.handleSubmittedData) {
  //     this.props.handleSubmittedData(this.state.cards)
  // }
  //

  //     this.setState({
  //         name: '',
  //         surname: '',
  //         zipCode: '',
  //         birthday: '',
  //         deliveryDate: '',
  //         country: '',
  //         state: '',
  //         consent: '',
  //         gender: '',
  //         notifications: '',
  //         picture: '',
  //         // errors: {
  //         //     name: '',
  //         //     surname: '',
  //         //     zipCode: '',
  //         //     birthday: '',
  //         //     deliveryDate: '',
  //         //     country: '',
  //         //     state: '',
  //         //     consent: '',
  //         //     gender: '',
  //         //     notifications: '',
  //         //     picture: '',
  //         // },
  //         // submitted: false,
  //     })
  // }

  //     const formData = {
  //         name: this.nameRef.current?.value,
  //         surname: this.surnameRef.current?.value,
  //         zipCode: this.zipCodeRef.current?.value,
  //         birthday: this.birthdayRef.current?.value,
  //         deliveryDate: this.deliveryDateRef.current?.value,
  //         country: this.countryRef.current?.value,
  //         state: this.stateRef.current?.value,
  //         consent: this.consentRef.current?.checked,
  //         gender: this.genderRef.current?.value,
  //         notifications: this.notificationsRef.current?.checked,
  //         picture: this.pictureRef.current?.files?.[0] || null,
  //     };
  //
  //     x.push(formData);
  // };

  render() {
    const { errorName, message } = this.state;

    return (
      <>
        {message ? <div className="message">card added</div> : null}
        <form className="form" ref={this.formLink} onSubmit={this.handleSubmit}>
          <label className="form__label" htmlFor="name">
            name &nbsp;
            <input id="name" type="text" name="name" ref={this.name} placeholder="your name" />
          </label>
          {errorName ? <div className="error-message">the field should not be empty</div> : null}
          <button type="submit" className="form__btn">
            CREATE
          </button>
        </form>
      </>
    );
  }
}

// <>
//     <div className="form-container">
//         <form className="form-content" onSubmit={this.handleSubmit}>
//             <label>
//                 Name:
//                 <input type="text" ref={this.nameRef}/>
//             </label>
//             <br/>
//             <label>
//                 Surname:
//                 <input type="text" ref={this.surnameRef}/>
//             </label>
//             <br/>
//             <label>
//                 Zip Code:
//                 <input type="text" ref={this.zipCodeRef}/>
//             </label>
//             <br/>
//             <label>
//                 Birthday:
//                 <input type="date" ref={this.birthdayRef}/>
//             </label>
//             <br/>
//             <label>
//                 Delivery Date:
//                 <input type="date" ref={this.deliveryDateRef}/>
//             </label>
//             <br/>
//             <label>
//                 Country:
//                 <select ref={this.countryRef}>
//                     <option value="">-- Please select a country --</option>
//                     <option value="usa">USA</option>
//                     <option value="canada">Canada</option>
//                     <option value="uk">UK</option>
//                 </select>
//             </label>
//             <br/>
//             <label>
//                 Select state:
//                 <select ref={this.stateRef}>
//                     <option value="">-- Please select --</option>
//                     <option value="New York">New York</option>
//                     <option value="California">California</option>
//                     <option value="Texas">Texas</option>
//                 </select>
//             </label>
//             <br/>
//             <label>
//                 Consent to personal data:
//                 <input type="checkbox" ref={this.consentRef}/>
//             </label>
//             <br/>
//             <label>
//                 Gender:
//                 <label>
//                     <input type="radio" value="male" ref={this.genderSwitcherRef}/>
//                     Male
//                 </label>
//                 <label>
//                     <input type="radio" value="female" ref={this.genderSwitcherRef}/>
//                     Female
//                 </label>
//             </label>
//             <br/>
//             <label>
//                 Profile picture:
//                 <input type="file" accept="image/*" ref={this.pictureInputRef}/>
//             </label>
//             <br/>
//             <button className="submit-form-btn" type="submit">Submit</button>
//         </form>
//     </div>
// </>
// )
// }

export { FormAddCard };
