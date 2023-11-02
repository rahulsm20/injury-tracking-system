export default function parseDate(date) {
  const isoString = date.toISOString();
  const userTimezoneOffset = new Date().getTimezoneOffset();
  const parsedDate = new Date(
    Date.parse(isoString) - userTimezoneOffset * 60 * 1000
  ).toISOString();
  const formattedDate = parsedDate.split("T")[0];
  const formattedTime = parsedDate.split("T")[1].substring(0, 5);
  return { formattedDate, formattedTime };
}
