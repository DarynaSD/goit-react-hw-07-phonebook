import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => {
  return state.contactsHandler.contacts.items;
};

export const selectorFilter = state => {
  // console.log('selectorFilter:>>', state)
  // console.log('selectorFilter:>>', state.filterHandler)
  // console.log('selectorFilter:>>', state.filterHandler.filter)

  return state.filterHandler;
};

export const selectorVisible = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    // console.log('selector contacts:>>', contacts)
    // console.log('selector filter:>>', filter)

    if (filter) {
      return contacts.filter(one =>
        one.contactName.toLowerCase().includes(filter.toLowerCase())
      );
    } else return contacts;
  }
);
