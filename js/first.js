document.write(ageCal(new Date(
  (birth_date.value).split('-')[0],
  (birth_date.value).split('-')[1],
  (birth_date.value).split('-')[2]
  )
))

function ageCal(date1, date2) {
  date2 = date2 || new Date();
  var difference = date2.getTime() - date1.getTime();

  return Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
}
