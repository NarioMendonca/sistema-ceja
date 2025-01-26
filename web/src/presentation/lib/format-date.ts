export function formatDate(date: Date) {
  const dateFormated = date.toString().split('T')[0].split('-')
  const dateDDMMYYYY = `${dateFormated[2]}/${dateFormated[1]}/${dateFormated[0]}`
  return dateDDMMYYYY
}