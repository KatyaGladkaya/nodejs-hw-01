import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Усі контакти видалено.');
  } catch (err) {
    console.error('Помилка видалення контактів:', err.message);
  }
};

removeAllContacts();
