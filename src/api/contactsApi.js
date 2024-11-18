import axios from 'axios';

const BASE_URL = '/api/contacts';

export const fetchContacts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch {
    throw new Error('Error fetching contacts');
  }
};

export const addContact = async (contact) => {
  try {
    const response = await axios.post(BASE_URL, contact);
    return response.data;
  } catch {
    throw new Error('Error adding contact');
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch {
    throw new Error('Error deleting contact');
  }
};
