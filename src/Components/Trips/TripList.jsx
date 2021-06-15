import React, { useEffect, useState } from 'react';

import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonHeader,
  IonCardSubtitle,
  IonContent,
} from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import getTripsByUser from '../../api/api';
import { formatDate } from '../../utils/utils';
import Countdown from './Countdown';

const TripsList = ({ user }) => {
  const history = useHistory();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    getTripsByUser(user, setUserTrips);
  }, []);

  const specificTrip = (trip) => {
    history.push(`/trips/${trip.tripId}`);
  };

  const deleteTrip = (tripId) => {
    console.log(tripId);
  };

  return (
    <IonContent overflow-scroll="true" class="has-header">
      <IonHeader>
        <h1>Current Trips</h1>
      </IonHeader>
      <Link to="/new-trip">
        <IonButton color="secondary">New Trip</IonButton>
      </Link>

      {userTrips.map((trip) => (
        <IonCard key={trip.tripId}>
          <IonCard color="light" onClick={() => specificTrip(trip)}>
            <IonCardHeader>
              <Countdown trip={trip} />
              <IonCardTitle>{trip.trip_name}</IonCardTitle>
            </IonCardHeader>
            <IonCardSubtitle>
              <h5>
                {'Organised By: '}
                {trip.owner}
              </h5>
            </IonCardSubtitle>
            <IonCardSubtitle>
              {' '}
              {formatDate(trip.start_date.seconds)}
              {' - '}
              {formatDate(trip.end_date.seconds)}
            </IonCardSubtitle>
          </IonCard>
          <IonButton
            color="danger"
            onClick={() => {
              deleteTrip(trip.tripId);
            }}
          >
            Delete
          </IonButton>
        </IonCard>
      ))}
    </IonContent>
  );
};
export default TripsList;
