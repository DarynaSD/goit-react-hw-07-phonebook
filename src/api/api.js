import axios from "axios";

axios.defaults.baseURL = 'https://65364b41c620ba9358ed4420.mockapi.io/'

export const getAllContacts = async () => {
    const { data } = await axios('contacts');
    return data;
}

export const postContact = async (newContact) => {
    const { data } = await axios.post('contacts', newContact);
    return data;
}

export const deleteContact = async (id) => {
    const { data } = await axios.delete(`contacts/${id}`);
    return data.id;
}