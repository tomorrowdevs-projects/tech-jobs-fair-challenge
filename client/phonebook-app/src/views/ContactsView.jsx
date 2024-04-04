import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ContactsFilter from "../components/ContactsFilter";
import ContactsList from "../components/ContactsList";
import { useContacts } from "../hooks/useContacts"; // Assuming the custom hook's path

const ContactsView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contacts = useContacts(searchTerm);

  return (
    <Container>
      <Row className="mt-4 mb-4">
        <Col className="col">
          <ContactsFilter onSearchTermChange={setSearchTerm} />
        </Col>
        <Col className="col-auto">
          <Button variant="dark">Add Contact</Button>
        </Col>
      </Row>
      <ContactsList contacts={contacts} />
    </Container>
  );
};

export default ContactsView;
