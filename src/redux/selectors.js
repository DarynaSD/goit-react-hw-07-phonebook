export const selectorContacts = (store) => {
	return store.contactsHandler.contacts
}

export const selectorFilter = (store) => {
	return store.contactsHandler.filter
}