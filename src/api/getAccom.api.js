import db from '../Config/firebase-setup';

const getAccommodationByTripId = (tripID, setAccommodation) => {
  const accommArray = [];
  db.collection('trips')
    .doc(tripID)
    .collection('hotels')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const accommData = doc.data();
        const accommId = doc.id;
        const combinedAccommIdAndData = { accommId, ...accommData };
        accommArray.push(combinedAccommIdAndData);
      });
      setAccommodation(accommArray);
    });
};

export default getAccommodationByTripId;
