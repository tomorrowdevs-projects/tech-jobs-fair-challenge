import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ContactFilter from "../components/contact-filter";
import ContactTable from "../components/contact-table";
import { useContacts } from "../hooks/useContacts"; // Assuming the custom hook's path

const ContactsView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const contacts = useContacts();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1>Contacts</h1>
      <ContactFilter onSearchChange={setSearchTerm} />
      <ContactTable contacts={filteredContacts} />
    </Container>
  );
};

export default ContactsView;
