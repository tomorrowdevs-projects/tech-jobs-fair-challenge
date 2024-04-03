import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ContactFilter from "../components/ContactFilter";
import ContactTable from "../components/ContactTable";
import { useContacts } from "../hooks/useContacts"; // Assuming the custom hook's path

const ContactsView = () => {
  const [filters, setFilters] = useState({
    name: "",
    address: "",
    email: "",
    company: "",
    position: "",
  });
  const contacts = useContacts(filters);

  return (
    <Container>
      <h1>Contacts</h1>
      <ContactFilter onFiltersChange={setFilters} />
      <ContactTable contacts={contacts} />
    </Container>
  );
};

export default ContactsView;
