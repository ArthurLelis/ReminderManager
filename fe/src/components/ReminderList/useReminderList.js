import {
  useState,
  useEffect,
  useCallback,
} from 'react';

import RemindersService from '../../services/RemindersService';

import toast from '../../utils/toast';

export default function useReminderList(remindersProps, isLoading, onDeleteReminder) {
  const [idDate, setIdDate] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [reminderBeingDeleted, setReminderBeingDeleted] = useState();

  useEffect(() => {
    setReminders(remindersProps);
  }, [remindersProps]);

  const handleDeleteReminder = useCallback((idDay, reminder) => {
    setIdDate(idDay);
    setReminderBeingDeleted(reminder);
    setIsDeleteModalVisible(true);
  }, []);

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  async function handleConfirmDeleteReminder() {
    try {
      setIsLoadingDelete(true);

      await RemindersService.deleteReminder(idDate, reminderBeingDeleted.id);

      onDeleteReminder(idDate, reminderBeingDeleted.id);
      handleCloseDeleteModal();

      toast({
        type: 'success',
        text: 'Lembrete deletado com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: error.message,
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return {
    reminders,
    isLoading,
    isDeleteModalVisible,
    isLoadingDelete,
    reminderBeingDeleted,
    handleDeleteReminder,
    handleCloseDeleteModal,
    handleConfirmDeleteReminder,
  };
}
