import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const filePath = path.resolve(PATH_DB);

export const writeContacts = async (updatedContacts) => {
  try {
    const json = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(filePath, json, 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err.message);
    throw err;
  }
};
