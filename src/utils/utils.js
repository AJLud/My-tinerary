// parameter is being passed from the returned object of dateDifference.
const countdown = ({ seconds, tripDurationSeconds }) => {
  // potentially refactor to switches
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

  // within the last hour of start trip
  if (seconds < 3600 && seconds >= 0) {
    return "Don't forget your toothbrush!";
  }

  // if curr date is in the durationg of an ongoing trip
  if (seconds < 0 && seconds >= -tripDurationSeconds) {
    return "Ongoing - don't forget your postcard";
  }

  return 'Archived';
};

const dateDifference = (currDate, tripStartDate, tripEndDate) => {
  if (!tripStartDate) return { seconds: 0, tripDurationSeconds: 0 };
  const timeElapsed = tripStartDate - currDate;
  const tripDuration = tripEndDate - tripStartDate;
  return { seconds: timeElapsed, tripDurationSeconds: tripDuration };
};
// returned object to be passed into countdown

const formatDate = (startDate) => {
  const fullTS = startDate * 1000;
  const isoDate = new Date(fullTS).toISOString();

  const [date] = isoDate.split('T');

  const splitDate = date.split('-');

  return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
};

module.exports = { countdown, dateDifference, formatDate };
