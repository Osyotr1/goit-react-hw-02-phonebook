import { nanoid } from "nanoid";
import React, {Component} from "react";
import ContactsRender from './Render/contactsRender';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name} = e.currentTarget;
    const {number} = e.currentTarget;
    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  render() {
    const { contacts, filter } = this.state;
    const filterNormalized = filter.toLowerCase();
    const showContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalized));

    return(
    <>
      <form onSubmit={this.handleSubmit}>
      <h2>Phonebook</h2>
      <label>Name<br></br>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        /><br></br>
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
      </label>
      <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.changeFilter}/>  
      <ul>
        <ContactsRender contacts={showContacts}/>
      </ul>
      </form>
    </>
    
    )
  }
}

export default App;