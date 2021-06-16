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

import { useHistory } from 'react-router-dom';
import getTripsByUser from '../../api/api';
import { formatDate } from '../../utils/utils';
import Loading from '../Loading';
import Countdown from './Countdown';
import BackButton from '../BackButton';

const TripsList = ({ user }) => {
  const history = useHistory();
  const [userTrips, setUserTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getTripsByUser(user, setUserTrips);
      setIsLoading(false);
    }, 1000);
  }, []);

  const specificTrip = (trip) => {
    history.push(`/trips/${trip.tripId}`);
  };

  if (isLoading) return <Loading />;

  return (
    <IonContent overflow-scroll="true">
      <BackButton />
      <IonHeader>
        <h1>Current Trips</h1>
      </IonHeader>
      <IonButton
        expand="block"
        color="secondary"
        onClick={() => {
          history.push('new-trip');
        }}
      >
        New Trip
      </IonButton>

      {userTrips.map((trip) => (
        <IonCard
          key={trip.tripId}
          color="light"
          onClick={() => specificTrip(trip)}
        >
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
      ))}
    </IonContent>
  );
};
export default TripsList;
