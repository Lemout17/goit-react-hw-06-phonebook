import PropTypes from "prop-types";
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

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Contacts;
