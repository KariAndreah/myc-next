const changeTime = (x: any) => {
  // substr(start, length)
  let timeCheck = x.substr(11, 5);

  timeCheck = timeCheck.split(':');

  const hours = Number(timeCheck[0]);
  const minutes = Number(timeCheck[1]);

  let timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue = `${hours}`;
  } else if (hours > 12) {
    timeValue = `${hours - 12}`;
  } else if (hours === 0) {
    timeValue = '12';
  }

  timeValue += minutes < 10 ? `:0${minutes}` : `:${minutes}`; // get minutes

  timeValue += hours >= 12 ? 'pm' : 'am'; // get AM/PM

  return timeValue;
};

export default changeTime;
