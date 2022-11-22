import React from "react";

const ContactList = ({contacts}) => (
  <ul>
    {contacts.map(({id, name, number}) => (
      <li key={id}>
        <p>{name}:{number}</p>
      </li>
    ))}
  </ul>
)


export default ContactList;