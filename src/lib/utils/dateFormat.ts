const dateFormat = (datetime: string | Date) => {
  const dateTime = new Date(datetime);

  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const day = String(dateTime.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export default dateFormat;
