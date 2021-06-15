import React, { useEffect, useState } from 'react';

import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonHeader,
  IonCardSubtitle,
  IonCardContent,
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

  return (
    <IonContent>
      <IonHeader>
        <h1>Current Trips</h1>
      </IonHeader>
      <IonButton color="secondary">
        <Link to="/new-trip">Start new trip!!!</Link>
      </IonButton>
      {userTrips.map((trip) => (
        <IonCard
          key={trip.tripId}
          color="light"
          onClick={() => specificTrip(trip)}
        >
          <IonCardHeader>
            <Countdown trip={trip} />
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
            <IonCardSubtitle>
              {' '}
              {formatDate(trip.start_date.seconds)}
              {' - '}
              {formatDate(trip.end_date.seconds)}
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  );
};
export default TripsList;
