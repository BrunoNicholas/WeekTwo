input_date = (birth_date.value).split('-');

document.write(ageCal(new Date(input_date[0], input_date[1], input_date[2])))

function ageCal(date1, date2) {
  date2 = date2 || new Date();
  var difference = date2.getTime() - date1.getTime();

  return Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
}
