const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

const sql = 'DELETE FROM transactions';

db.run(sql, (err) => {
    if (err) {
        console.error('Error deleting data:', err);
    } else {
        console.log('Все данные успешно удалены');
    }
    db.close(); 
});
