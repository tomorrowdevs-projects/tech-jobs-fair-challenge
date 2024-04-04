import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ContactsFilter from "../components/ContactsFilter";
import ContactsList from "../components/ContactsList";
import { useContacts } from "../hooks/useContacts"; // Assuming the custom hook's path

const ContactsView = () => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    company: "",
    position: "",
  });
  const contacts = useContacts(filters);

  return (
    <Container>
      <div className="mt-4"></div>
      <ContactsFilter className="mt-3" onFiltersChange={setFilters} />
      <ContactsList contacts={contacts} />
    </Container>
  );
};

export default ContactsView;
