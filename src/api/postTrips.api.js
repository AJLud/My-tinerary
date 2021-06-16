import db from '../Config/firebase-setup';

const postTripByUser = (newTrip) => {
  let response;
  return db
    .collection('trips')
    .add({
      trip_name: newTrip.trip_name,
      destination: newTrip.destination,
      owner: newTrip.owner,
      start_date: newTrip.start_date,
      end_date: newTrip.end_date,
      notes: newTrip.notes,
    })
    .then((docRef) => {
      response = `successfully posted trip: ${docRef.id}`;
      return response;
    })
    .catch((err) => `Trip did not post: ${err}`);
};

export default postTripByUser;
