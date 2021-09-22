const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
    db.run('DROP TABLE IF EXISTS New_Tasks');
    db.run('CREATE TABLE New_Tasks (id INTEGER PRIMARY KEY NOT NULL, task TEXT NOT NULL, status TEXT NOT NULL, section TEXT NOT NULL, etichetta TEXT NOT NULL)');
});