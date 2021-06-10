const countdown = ({ seconds }) => {
  const hour = 60 * 60;

  const pluralized = (remainingTime) => (remainingTime > 1 ? 's' : '');

  if (seconds >= 86400) {
    const day = 60 * 60 * 24;
    const days = Math.floor(seconds / day);

    return `${days} day${pluralized(days)} until`;
  }

  if (seconds < 86400) {
    const hours = Math.floor(seconds / hour);
    return `${hours} hour${pluralized(hours)} until`;
  }
  return '';
};

export default countdown;
