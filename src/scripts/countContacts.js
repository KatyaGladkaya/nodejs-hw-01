import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`Кількість контактів: ${contacts.length}`);
  } catch (err) {
    console.error('Помилка підрахунку контактів:', err.message);
  }
};

console.log(await countContacts());
