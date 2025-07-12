import {DatabaseSync} from 'node:sqlite'
const database = new DatabaseSync(":memory:")

database.exec(`
    CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    )
`)

database.exec(`
    CREATE TABLE todos (
    todo_id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT,
    completed BOOLEAN DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES (users(id))
    )
`)

export default database