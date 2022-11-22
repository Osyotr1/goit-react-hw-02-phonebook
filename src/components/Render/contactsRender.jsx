import React from "react";

const ContactsRender = ({contacts}) => (
  <ul>
    {contacts.map(({id, name, number}) => (
      <li key={id}>
        <p>{name}:{number}</p>
      </li>
    ))}
  </ul>
)


export default ContactsRender;