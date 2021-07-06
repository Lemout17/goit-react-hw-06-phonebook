import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "modern-normalize/modern-normalize.css";
import s from "./App.module.css";
import Section from "./Section";
import Form from "./Form";
import Contacts from "./Contacts";
import ContactsFilter from "./Contacts/ContactsFilter";

export default class App extends Component {
  state = {
    contacts: [
      {
        id: "id-1",
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: "id-2",
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: "id-3",
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: "id-4",
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    contacts.find((contact) => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : contacts.find((contact) => contact.number === number)
      ? alert(`${number} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts
      .filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.filterContacts();
    return (
      <>
        <Section title={"Phonebook"}>
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title={"Contacts"}>
          <div className={s.container}>
            <ContactsFilter value={filter} onChange={this.changeFilter} />
            <Contacts
              contacts={visibleContacts}
              onDelete={this.deleteContact}
            />
          </div>
        </Section>
      </>
    );
  }
}
