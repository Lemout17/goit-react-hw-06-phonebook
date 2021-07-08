import { v4 as uuidv4 } from "uuid";
import types from "./actionTypes";

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const filterContact = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default {
  addContact,
  deleteContact,
  filterContact,
};
