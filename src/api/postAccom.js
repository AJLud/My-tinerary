import db from '../Config/firebase-setup';

const postAccommodationDetails = (newAccommodation, tripId) => {
  let response;
  return db
    .collection('trips')
    .doc(tripId.tripId)
    .collection('hotels')
    .add({
      days: newAccommodation.days,
      hotel_name: newAccommodation.hotel_name,
      check_in: newAccommodation.check_in,
      notes: newAccommodation.notes,
    })
    .then((docRef) => {
      response = `successfully posted trip: ${docRef.id}`;
      return response;
    })
    .catch((err) => {
      console.log('message', err);
    });
};

export default postAccommodationDetails;
