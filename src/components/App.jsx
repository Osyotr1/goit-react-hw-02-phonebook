import { nanoid } from "nanoid";
import React, {Component} from "react";
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
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
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name} = e.currentTarget;
    const {number} = e.currentTarget;

    const checkName = this.state.contacts.find(contact => contact.name.toLowerCase() === name.value.toLowerCase());
    const checkNumber = this.state.contacts.find(contact => contact.number === number.value);

    if(checkName){
      return alert(`${name.value} is already in contacts.`);
    };

    if(checkNumber){
      return alert(`This phone number is already in use.`);
    }
    
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
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.handleSubmit}/>
      <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.changeFilter}/>  
      <ul>
      <ContactList contacts={showContacts}/>
      </ul>
      
    </>
    
    )
  }
}

export default App;