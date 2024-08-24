import PropTypes, { shape } from 'prop-types';

import useReminderList from './useReminderList';

import { Container } from './styles';

import Spinner from '../Spinner';
import EmptyList from './EmptyList';
import Accordion from '../Accordion';
import Modal from '../Modal';

export default function ReminderList({
  remindersProps,
  isLoading,
  onDeleteReminder,
}) {
  const {
    reminders,
    isDeleteModalVisible,
    isLoadingDelete,
    reminderBeingDeleted,
    handleDeleteReminder,
    handleCloseDeleteModal,
    handleConfirmDeleteReminder,
  } = useReminderList(remindersProps, isLoading, onDeleteReminder);

  const hasReminders = reminders.length > 0;
  const isEmptyList = !isLoading && !hasReminders;

  return (
    <Container $center={isLoading || isEmptyList}>
      {isLoading && <Spinner />}

      {isEmptyList && <EmptyList />}

      {hasReminders && (
        <>
          <Accordion
            reminders={reminders}
            onDeleteReminder={handleDeleteReminder}
          />

          <Modal
            danger
            visible={isDeleteModalVisible}
            isLoading={isLoadingDelete}
            title="Tem certeza que deseja remover esse lembrete?"
            confirmLabel="Deletar"
            onCancel={() => handleCloseDeleteModal()}
            onConfirm={() => handleConfirmDeleteReminder()}
          >
            <p> Lembrete: {reminderBeingDeleted?.name} </p>

            <b> Esta ação não poderá ser desfeita! </b>
          </Modal>
        </>
      )}
    </Container>
  );
}

ReminderList.propTypes = {
  remindersProps: PropTypes.arrayOf(shape()),
  isLoading: PropTypes.bool.isRequired,
  onDeleteReminder: PropTypes.func.isRequired,
};
