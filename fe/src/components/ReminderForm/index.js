import PropTypes from 'prop-types';

import useReminderForm from './useReminderForm';

import {
  FormContainer,
  RequiredInfo,
  ButtonContainer,
} from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Button from '../Button';

export default function ReminderForm({ addReminder }) {
  const {
    name,
    date,
    isFormValid,
    isSubmiting,
    handleNameChange,
    handleDateChange,
    getErrorMessageByFieldName,
    handleSubmit,
  } = useReminderForm(addReminder);

  let today = new Date();
  today.setDate(today.getDate() + 1);
  today = today.toLocaleDateString('fr-CA');

  return (
    <FormContainer onSubmit={(event) => handleSubmit(event)}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <label htmlFor="inputName">
          {' '} Nome <RequiredInfo> * </RequiredInfo>:

          <Input
            type="text"
            value={name}
            id="inputName"
            data-testid="inputName"
            disabled={isSubmiting}
            placeholder="Digite o nome do lembrete..."
            $error={getErrorMessageByFieldName('name')}
            onChange={(event) => handleNameChange(event)}
          />
        </label>
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('date')}>
        <label htmlFor="inputDate">
          {' '} Data <RequiredInfo> * </RequiredInfo>:

          <Input
            type="date"
            min={today}
            value={date}
            id="inputDate"
            data-testid="inputDate"
            disabled={isSubmiting}
            $error={getErrorMessageByFieldName('date')}
            onChange={(event) => handleDateChange(event)}
          />
        </label>
      </FormGroup>

      <ButtonContainer>
        <Button
          type="submit"
          dataTestId="buttonCreate"
          disabled={!isFormValid}
          isLoading={isSubmiting}
        >
          Criar lembrete
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
}

ReminderForm.propTypes = {
  addReminder: PropTypes.func.isRequired,
};
