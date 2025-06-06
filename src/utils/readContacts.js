import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';
import fs from 'node:fs/promises';

const filePath = path.resolve(PATH_DB);

export const readContacts = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);;
    } catch (err) {
        console.error('Помилка читання файлу:', err.message);
    throw err;
    }
};
