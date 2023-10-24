import { createSelector } from "@reduxjs/toolkit"

export const selectorContacts = (state) => {
	return state.contactsHandler.contacts.items
}

export const selectorFilter = (state) => {
	return state.contactsHandler.filter
}

export const selectorVisible = createSelector(
	[selectorContacts, selectorFilter],
	(contacts, filter) =>
		contacts && filter
			? contacts.filter((one) =>
					one.name.toLowerCase().includes(filter.toLowerCase())
			  )
			: contacts
)