const countdown = ({ seconds }) => {
  const hour = 60 * 60;

  const pluralized = (remainingTime) => (remainingTime > 1 ? 's' : '');

  if (seconds >= 86400) {
    const day = 60 * 60 * 24;
    const days = Math.floor(seconds / day);

    return `${days} day${pluralized(days)} until`;
  }

  if (seconds >= 3600) {
    const hours = Math.floor(seconds / hour);
    return `${hours} hour${pluralized(hours)} until`;
  }

  if (seconds < 3600 && seconds >= 0) {
    return "Don't forget your toothbrush!";
  }
  return '';
};

const dateDifference = (currDate, futureTripDate) => {
  if (!futureTripDate) return { seconds: 0 };
  const timeElapsed = futureTripDate - currDate;
  return { seconds: timeElapsed };
};

module.exports = { countdown, dateDifference };
