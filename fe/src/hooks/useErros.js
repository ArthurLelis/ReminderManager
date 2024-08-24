import { useState, useCallback } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const removeError = useCallback((fieldName) => {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }, []);

  const setError = useCallback(({ field, message }) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists && errorAlreadyExists.message === message) {
      return;
    }

    if (errorAlreadyExists && errorAlreadyExists.message !== message) {
      removeError(field);
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }, [errors, removeError]);

  const getErrorMessageByFieldName = useCallback((fieldName) => (
    errors.find((error) => error.field === fieldName)?.message
  ), [errors]);

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
