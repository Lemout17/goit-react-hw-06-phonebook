import { createAction, nanoid } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction("contacts/delete");

const filterContact = createAction("contacts/changeFilter");

export default {
  addContact,
  deleteContact,
  filterContact,
};
