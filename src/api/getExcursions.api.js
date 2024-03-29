import db from '../Config/firebase-setup';

const getExcursionByTripID = (tripID, setExcursions) => {
  const excursionsArray = [];
  db.collection('trips')
    .doc(tripID)
    .collection('excursions')
    .orderBy('date')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const excursionID = doc.id;
        const excursionData = doc.data();
        const combinedExcursionIDAndData = { excursionID, ...excursionData };
        excursionsArray.push(combinedExcursionIDAndData);
      });
      setExcursions(excursionsArray);
    })
    .catch((err) => `Failed to get Excursions: ${err}`);
};

export default getExcursionByTripID;
