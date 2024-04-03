const ContactTable = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactTable;
