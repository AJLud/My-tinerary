import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import { Link } from 'react-router-dom';
import db from '../Config/firebase-setup';
// import getTrips from '../api';

const Homepage = (/* { user } */) => {
  // const [userTrips, setUserTrips] = useState([]);

  // useEffect(() => {
  //   setUserTrips(
  //     (currUserTrips) => {
  //       const newUserTrips = [...currUserTrips];
  //       newUserTrips.trips = getTrips(user.username);
  //       return newUserTrips;
  //     },
  //   );

  const [data, setData] = useState([]);

  const getFirestore = () => {
    const data1 = [];
    db.collection('trips')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const dataObj = doc.data();
          const dataId = doc.id;
          const combined = { dataId, ...dataObj };
          // i need this explaining lol whats going on
          // needs adding into api.js
          // needs adding into a different state (user specific trip in userTrips?)
          data1.push(combined);
        });
        setData(data1);
      });
  };

  useEffect(() => {
    getFirestore();
  }, []);
  // }, []);

  return (
    <>
      <IonButton>Current Trips</IonButton>
      <IonButton>Previous Trips</IonButton>
      <IonButton color="secondary">
        <Link to="/trips/new-trip">Start new trip!!!</Link>
      </IonButton>

      {data.map((trip) => (
        <IonCard key={trip.trip_name}>
          <IonCardHeader>
            <IonCardTitle>{trip.trip_name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>{trip.destination}</IonCardContent>
        </IonCard>
      ))}

      {/* <IonCard>
        <IonButton size="large">
        <Link to="trips/:trip_id">
          <IonCardHeader>
            <IonCardSubtitle>54 days until... </IonCardSubtitle>
            <IonCardTitle>Spain</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature&apos;s heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </Link>
         </IonButton>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>194 days until... </IonCardSubtitle>
          <IonCardTitle>New York</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Keep close to Nature&apos;s heart... and break clear away, once in
          awhile, and climb a mountain or spend a week in the woods. Wash your
          spirit clean.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>404 days until... </IonCardSubtitle>
          <IonCardTitle>Ireland</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Keep close to Nature&apos;s heart... and break clear away, once in
          awhile, and climb a mountain or spend a week in the woods. Wash your
          spirit clean.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>404 days until... </IonCardSubtitle>
          <IonCardTitle>Ireland</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Keep close to Nature&apos;s heart... and break clear away, once in
          awhile, and climb a mountain or spend a week in the woods. Wash your
          spirit clean.
        </IonCardContent>
      </IonCard> */}
    </>
  );
};

export default Homepage;
