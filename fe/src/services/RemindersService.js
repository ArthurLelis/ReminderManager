import HttpClient from './utils/HttpClient';

class RemindersService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listReminders() {
    return this.httpClient.get('/reminders');
  }

  createReminder(reminder) {
    return this.httpClient.post('/reminders', { body: reminder });
  }

  updateReminder(id, reminder) {
    return this.httpClient.put(`/reminders/${id}`, { body: reminder });
  }

  deleteReminder(idDay, id) {
    return this.httpClient.delete(`/reminders/${id}/day/${idDay}`);
  }
}

export default new RemindersService();
