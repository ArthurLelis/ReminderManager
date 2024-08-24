function createIdByDate(date) {
  const id = parseInt(date.replace(/-/g, ''));
  return id;
}

module.exports = createIdByDate;
