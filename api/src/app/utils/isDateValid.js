function isValidDate(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(dateString)) {
    return false;
  }

  const date = new Date(`${dateString}T00:00:00`);
  const today = new Date();

  if (Number.isNaN(date.getTime())) {
    return false;
  }

  const year = date.getFullYear();

  if (year.toString().length !== 4 || year < 2024) {
    return false;
  }

  const dateWithoutTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const todayWithoutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  if (dateWithoutTime <= todayWithoutTime) {
    return false;
  }

  return true;
}

module.exports = isValidDate;
