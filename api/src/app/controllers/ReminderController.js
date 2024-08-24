const RemindersRepository = require('../repositories/RemindersRepository');

const createIdByDate = require('../utils/createIdByDate');
const isDateValid = require('../utils/isDateValid');
const parseDate = require('../utils/parseDate');

class ReminderController {
  index(request, response) {
    const reminders = RemindersRepository.findAll();

    return response.json(reminders);
  }

  store(request, response) {
    const {
      name, date
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'O nome é obrigatório!' });
    }

    if (!date) {
      return response.status(400).json({ error: 'A data é obrigatória!' });
    }

    if (date && !isDateValid(date)) {
      return response.status(400).json({ error: 'Data inválida!' });
    }

    const id = createIdByDate(date);
    const newDate = parseDate(date);

    const reminder = RemindersRepository.create(id, {
      name,
      date: newDate,
    });

    return response.status(201).json(reminder);
  }

  delete(request, response) {
    const { id } = request.params;
    const { idDay } = request.params;

    RemindersRepository.delete(idDay, id);

    return response.sendStatus(204);
  }
}

module.exports = new ReminderController();
