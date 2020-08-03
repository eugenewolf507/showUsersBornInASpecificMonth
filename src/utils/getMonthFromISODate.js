function getMonthFromISODate(date) {
  const tempdate = new Date(date);
  const month = tempdate.getUTCMonth(); // + 1
  return month;
}

export default getMonthFromISODate;
