/* eslint-disable react/jsx-no-bind */
import { useState, useEffect } from 'react';

import {
  Container,
  CardsContainer,
} from './styles';

import RemindersService from '../../services/RemindersService';

import Card from '../Card';
import ReminderForm from '../ReminderForm';
import ReminderList from '../ReminderList';

export default function Content() {
  const [reminders, setReminders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function addReminder(reminder) {
    const idDay = reminder[0].id;

    if (reminders.find((day) => day.id === idDay)) {
      setReminders((prevState) => prevState.map((day) => ({
        ...day,
        reminders: day.id === idDay ? reminder[0].reminders : [...day.reminders],
      })));

      return;
    }

    setReminders((prevState) => [...prevState, reminder[0]]);
  }

  useEffect(() => {
    async function loadReminders() {
      try {
        setIsLoading(true);

        const reminderList = await RemindersService.listReminders();

        setReminders(reminderList);
      } catch {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }

    loadReminders();
  }, []);

  function deleteReminder(idDate, idReminder) {
    if (reminders.find((day) => day.id === idDate).reminders.length === 1) {
      setReminders((prevState) => prevState.filter((day) => day.id !== idDate));
    } else {
      setReminders((prevState) => prevState.map((day) => ({
        ...day,
        reminders: day.reminders.filter((reminder) => reminder.id !== idReminder),
      })));
    }
  }

  return (
    <Container>
      <CardsContainer>
        <Card title="Novo lembrete">
          <ReminderForm addReminder={addReminder} />
        </Card>

        <Card title="Lista de lembretes">
          <ReminderList
            remindersProps={reminders}
            isLoading={isLoading}
            onDeleteReminder={deleteReminder}
          />
        </Card>
      </CardsContainer>
    </Container>
  );
}
