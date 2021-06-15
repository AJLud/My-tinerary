import React, { useEffect, useState } from 'react';

import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonHeader,
  IonContent,
  IonCardContent,
} from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import getTripsByUser from '../../api/api';
import { formatDate } from '../../utils/utils';
import Countdown from './Countdown';

import deleteTripByID from '../../api/deleteTripById.api';

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
    deleteTripByID(tripId).then(() => {
      history.go(0);
    });
  };

  return (
    <IonContent overflow-scroll="true">
      <IonHeader>
        <h1>Current Trips</h1>
      </IonHeader>
      <Link to="/new-trip">
        <IonButton color="secondary">New Trip</IonButton>
      </Link>

      {userTrips.map((trip) => (
        <IonCard key={trip.tripId}>
          <IonCard color="light" onClick={() => specificTrip(trip)}>
            <Countdown trip={trip} />
            <IonCardHeader>
              <IonCardTitle>{trip.trip_name}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <h5>
                {'Organised By: '}
                {trip.owner}
              </h5>
              {'Dates: '}
              {formatDate(trip.start_date.seconds)}
              {' - '}
              {formatDate(trip.end_date.seconds)}
            </IonCardContent>
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
