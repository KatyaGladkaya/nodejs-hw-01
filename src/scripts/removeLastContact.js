import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Список контактів вже порожній.');
      return;
    }
    contacts.pop();
    await writeContacts(contacts);
  } catch (err) {
    console.error('Помилка видалення останнього контакту:', err.message);
  }
};

removeLastContact();
