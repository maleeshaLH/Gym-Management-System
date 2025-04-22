import { client } from '../server';
import {Contact} from "../module/Contact";

export async function saveContact(contact: Contact) {
    const db = client.db('usersdb');
    const users = db.collection('users');
    const result = await users.insertOne(contact);
    console.log('📦 Contact saved with ID:', result.insertedId);
    return result;
}

export async function getContact() {
    const db = client.db('usersdb');
    const users = await db.collection('contacts');

    return users.find().toArray();
}

