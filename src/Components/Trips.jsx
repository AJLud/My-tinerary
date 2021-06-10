import React, { useEffect, useState } from 'react';

import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';

import { Link, useHistory } from 'react-router-dom';

import getTripsByUser from '../api';

const Homepage = ({ user }) => {
  const history = useHistory();
  const [userTrips, setUserTrips] = useState([]);
  useEffect(() => {
    getTripsByUser(user, setUserTrips);
  }, []);
  const setText = (trip) => {
    history.push(`/trips/${trip.tripId}`);
  };
  return (
    <>
      <IonButton>Current Trips</IonButton>
      <IonButton>Previous Trips</IonButton>
      <IonButton color="secondary">
        <Link to="/trips/new-trip">Start new trip!!!</Link>
      </IonButton>
      {userTrips.map((trip) => (
        <IonCard
          key={trip.trip_name}
          color="light"
          onClick={() => setText(trip)}
        >
          <IonCardHeader>
            <IonCardTitle>{trip.trip_name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>
              <h5>
                Location:
                {trip.destination}
              </h5>
            </IonCardSubtitle>

            <IonCardSubtitle>
              <h5>
                Organised by:
                {trip.owner}
              </h5>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      ))}
    </>
  );
};
export default Homepage;
