let { db, increment } = require('../../database');

class RemindersRepository {
  findAll() {
    return db;
  }

  create(id, {name, date}) {
    const dateExists = db.find((item) => item.id === id);

    if (!dateExists) {
      db.push({
        id,
        date,
        reminders: [{ id: ++increment, name }]
      });

      return [db.find((item) => item.id === id)];
    }

    dateExists.reminders.push({
      id: ++increment,
      name,
    });

    return [dateExists];
  }

  delete(idDay, id) {
    db = db.map((day) => {
      const reminders = day.reminders;

      return {
        ...day,
        reminders: reminders.filter((reminder) => reminder.id !== Number(id))
      }
    });

    if (db.find((day) => day.id === Number(idDay)).reminders.length === 0) {
      db = db.filter((day) => day.id !== Number(idDay));
    }

    return true;
  }
}

module.exports = new RemindersRepository();
