import db from '../Config/firebase-setup';

const postTravel = (newTravel, tripId) => {
  let response;
  return db
    .collection('trips')
    .doc(tripId.tripId)
    .collection('travel')
    .add({
      cost: newTravel.cost,
      direction: newTravel.direction,
      leavingFrom: newTravel.leavingFrom,
      arrivingAt: newTravel.arrivingAt,
      leavingDate: newTravel.leavingDate,
      transport: newTravel.transport,
    })
    .then((docRef) => {
      response = `successfully posted trip: ${docRef.id}`;
      return response;
    })
    .catch((err) => `Journey did not post: ${err}`);
};

export default postTravel;
