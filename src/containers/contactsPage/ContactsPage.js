import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({
  contacts,
  handleNewContact,
}) => {
  const [currentName, setCurrentName] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      handleNewContact(currentName, currentPhone, currentEmail);
      setCurrentName("");
      setCurrentPhone("");
      setCurrentEmail("");
    } else {
      alert("Name taken. Please try again")
    }
  };

  useEffect(() => {
    if (contacts.find(e => e.name === currentName)) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [contacts, currentName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={currentName}
          phone={currentPhone}
          email={currentEmail}
          setName={setCurrentName}
          setPhone={setCurrentPhone}
          setEmail={setCurrentEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
