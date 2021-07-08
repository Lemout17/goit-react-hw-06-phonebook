import { connect } from "react-redux";
import actions from "../../redux/actions";
import s from "./Contacts.module.css";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <span className={s.text}>{name} :</span>
          <span className={s.text}>{number}</span>
          <button
            className={s.button}
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const filterContacts = (allContacts, value) =>
  allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(value.toLowerCase())
  );

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
