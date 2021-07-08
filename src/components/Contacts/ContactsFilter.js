import { connect } from "react-redux";
import actions from "../../redux/actions";
import s from "./ContactsFilter.module.css";

const ContactsFilter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Filter contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
