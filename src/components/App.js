import "modern-normalize/modern-normalize.css";
import s from "./App.module.css";
import Section from "./Section";
import Form from "./Form";
import Contacts from "./Contacts";
import ContactsFilter from "./Contacts/ContactsFilter";

const App = () => {
  return (
    <>
      <Section title={"Phonebook"}>
        <Form />
      </Section>

      <Section title={"Contacts"}>
        <div className={s.container}>
          <ContactsFilter />
          <Contacts />
        </div>
      </Section>
    </>
  );
};

export default App;
