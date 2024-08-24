/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './index';

let today = new Date();
today.setDate(today.getDate() + 1);
today = today.toLocaleDateString('fr-CA');

test('Deve validar que o campo nome é obrigatório', () => {
  render(<App />);

  const inputElement = screen.getByTestId('inputName');
  fireEvent.change(inputElement, { target: { value: 'L' } });
  fireEvent.change(inputElement, { target: { value: '' } });

  const validator = screen.getByTestId('message-validator');
  expect(validator.textContent).toBe('O nome é obrigatório!');
});

test('Deve validar que o campo data é obrigatório', () => {
  render(<App />);

  const inputElement = screen.getByTestId('inputDate');
  fireEvent.change(inputElement, { target: { value: today } });
  fireEvent.change(inputElement, { target: { value: '' } });

  const validator = screen.getByTestId('message-validator');
  expect(validator.textContent).toBe('A data é obrigatória!');
});

test('Deve validar uma data válida (data fora do padrão)', () => {
  render(<App />);

  const inputElement = screen.getByTestId('inputDate');
  fireEvent.change(inputElement, { target: { value: today.replace('2024', '0002') } });

  const validator = screen.getByTestId('message-validator');
  expect(validator.textContent).toBe('Data inválida!');
});

test('Deve validar uma data válida (data passada)', () => {
  render(<App />);

  let date = new Date();
  date.setDate(date.getDate() - 1);
  date = date.toLocaleDateString('fr-CA');

  const inputElement = screen.getByTestId('inputDate');
  fireEvent.change(inputElement, { target: { value: date } });

  const validator = screen.getByTestId('message-validator');
  expect(validator.textContent).toBe('Data inválida!');
});

test('Deve validar a criação do lembrete', () => {
  render(<App />);

  const inputName = screen.getByTestId('inputName');
  fireEvent.change(inputName, { target: { value: 'Lembrete' } });

  const inputDate = screen.getByTestId('inputDate');
  fireEvent.change(inputDate, { target: { value: today } });

  const buttonCreate = screen.getByTestId('buttonCreate');
  userEvent.click(buttonCreate);

  setTimeout(() => {
    const toast = screen.getByTestId('toast');
    expect(toast.textContent).toBe('Lembrete cadastrado com sucesso!');
  }, 1000);
});
