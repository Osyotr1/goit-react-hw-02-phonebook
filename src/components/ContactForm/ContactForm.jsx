import React, { Component } from "react";

class ContactForm extends Component {
    state = {
        name:'',
        number: ''
    }
    render() {
    
    const { onSubmit } = this.props;

    return (   
    <form onSubmit={onSubmit}>
      <label>Name<br></br>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        /><br></br>
        </label>
      <label>Number<br></br>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        /><br></br>
      </label>
      <button type="Submit">Add contact</button>
      </form>
    )
    }
};

export default ContactForm;