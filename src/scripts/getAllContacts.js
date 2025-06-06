import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        console.log(contacts);
    }
    catch (err) {
        console.error('Помилка читання контактів:', err.message);
    }
 };

console.log(await getAllContacts());
