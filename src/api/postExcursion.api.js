import db from '../Config/firebase-setup';

const postExcursionDetails = (newExcursion, tripId) => {
  let response;
  return db
    .collection('trips')
    .doc(tripId.tripId)
    .collection('excursions')
    .add({
      name: newExcursion.name,
      address: newExcursion.address,
      date: newExcursion.date,
      cost: newExcursion.cost,
    })
    .then((docRef) => {
      response = `successfully posted excursion: ${docRef.id}`;
      return response;
    })
    .catch((err) => {
      console.log('message', err);
    });
};

export default postExcursionDetails;
