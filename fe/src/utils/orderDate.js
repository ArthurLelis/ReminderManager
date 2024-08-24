export default function orderDate(dateString, order = 'asc') {
  return dateString.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('/').map(Number);
    const [dayB, monthB, yearB] = b.date.split('/').map(Number);

    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
}
