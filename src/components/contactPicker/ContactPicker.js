import React from "react";

export const ContactPicker = ({
  contacts,
  onChange,
  value,
  name,
}) => {
  return (
    <>
      <select name={name} id={name} onChange={onChange} value={value}>
        <option value="">- No Contact Selected -</option>
        {contacts.map((contact, index) => {
          return (
            <option value={contact.name} key={index}>{contact.name}</option>
          )
        })}
      </select>
    </>
  );
};
