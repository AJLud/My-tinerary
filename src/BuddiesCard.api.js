import db from './Config/firebase-setup';

const getBuddiesByTripId = (tripID, setTripBuddies) => {
  const buddyArray = [];
  console.log(tripID);
  db.collection('Users')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const buddyData = doc.data();
        console.log(buddyData.trips);
        const buddyId = doc.id;
        const combinedBuddyIdAndData = { buddyId, ...buddyData };

        buddyArray.push(combinedBuddyIdAndData);
      });
      setTripBuddies(buddyArray);
    });
};
export default getBuddiesByTripId;
