import { useState } from 'react';

import useErrors from '../../hooks/useErros';

import RemindersService from '../../services/RemindersService';

import isValidDate from '../../utils/isDateValid';
import toast from '../../utils/toast';

export default function useReminderForm(addReminder) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = Boolean(name && date && errors.length === 0);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'O nome é obrigatório!' });
    } else {
      removeError('name');
    }
  }

  function handleDateChange(event) {
    setDate(event.target.value);

    if (!event.target.value) {
      setError({ field: 'date', message: 'A data é obrigatória!' });
    } else if (Boolean(event.target.value) && !isValidDate(event.target.value)) {
      setError({ field: 'date', message: 'Data inválida!' });
    } else {
      removeError('date');
    }
  }

  function handleResetFields() {
    setName('');
    setDate('');
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      setIsSubmiting(true);

      const reminderList = await RemindersService.createReminder({ name, date });

      handleResetFields();
      addReminder(reminderList);

      toast({
        type: 'success',
        text: 'Lembrete cadastrado com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: error.message,
      });
    } finally {
      setIsSubmiting(false);
    }
  }

  return {
    name,
    date,
    isFormValid,
    isSubmiting,
    handleNameChange,
    handleDateChange,
    getErrorMessageByFieldName,
    handleSubmit,
  };
}
