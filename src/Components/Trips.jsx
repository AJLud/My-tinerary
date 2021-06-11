import React, { useEffect, useState } from 'react';

import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonHeader,
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

  const specificTrip = (trip) => {
    history.push(`/trips/${trip.tripId}`);
  };

  return (
    <div>
      <IonHeader>
        <h1>Current Trips</h1>
      </IonHeader>
      <IonButton color="secondary">
        <Link to="/new_trip">Start new trip!!!</Link>
      </IonButton>
      {userTrips.map((trip) => (
        <IonCard
          key={trip.trip_name}
          color="light"
          onClick={() => specificTrip(trip)}
        >
          <IonCardHeader>
            <IonCardTitle>{trip.trip_name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>
              <h5>
                {'Location: '}
                {trip.destination}
              </h5>
            </IonCardSubtitle>

            <IonCardSubtitle>
              <h5>
                {'Organised By: '}
                {trip.owner}
              </h5>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      ))}
    </div>
  );
};
export default Homepage;
