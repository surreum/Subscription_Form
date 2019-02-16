import React, { Component } from 'react';
import { ValidateMessage } from './ValidateMessage';


class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          phone: '',
          URL: '',
          wrongInput: {email: '', phone: '', URL: ''},
          emailValid: false,
          phoneValid: false,
          URLValid: false,
          formValid: false
        }
      }

      getInput = (e) =>{
          const name = e.target.name;
          const value = e.target.value;
          this.setState({[name]: value},
            () => { this.validateInput(name, value) });
      }

      validateInput(fieldName, value){
        let fieldValidationErrors = this.state.wrongInput;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;
        let URLValid = this.state.URLValid;

        if (fieldName === 'email') {
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        }
        if (fieldName === 'phone') {
            phoneValid = value.match(/^((?!(0))[0-9]{10})$/);
            fieldValidationErrors.phone = phoneValid ? '': ' is not a valid phone number';
        }
        if (fieldName === 'URL') {
            URLValid = value.match(/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!,;=]|:|@)|\/|\?)*)?$/);
            fieldValidationErrors.URL = URLValid ? '': ' is not a valid URL address';
        }

    this.setState({wrongInput: fieldValidationErrors,
                    emailValid: emailValid,
                    phoneValid: phoneValid,
                    URLValid: URLValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.phoneValid && this.state.wwwValid});
  }
    
  render() {
    return (
      <form className="SubscibeForm">
      <h2>SUBSCRIBE ME!</h2>
       <div className="form-group">
         <input type="email" 
         className="form-control" 
         name="email" 
         placeholder="youremail@domain.com"
         value={this.state.email}
         onChange={this.getInput}/>
       </div>
       <div className="form-group">
         <input type="phone" 
         className="form-control" 
         name="phone" 
         placeholder="8901117733"
         value={this.state.phone}
         onChange={this.getInput}/>
       </div>
       <div className="form-group">
         <input type="URL" 
         className="form-control" 
         name="URL" 
         placeholder="https://yourwebsite.com"
         value={this.state.www} 
         onChange={this.getInput} />
       </div>
       <div className="button-submit">
       <button type="submit">
          SUBSCRIBE
       </button>
       </div>
       <div className="errorpanel">
          <ValidateMessage wrongInput={this.state.wrongInput} />
        </div>
      </form>
    );
  }
}

export default Form;
