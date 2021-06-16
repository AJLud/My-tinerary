import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardHeader,
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
      <IonHeader className="page-head" position="none">
        Current Trips
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
          color="primary"
          onClick={() => specificTrip(trip)}
        >
          <Countdown trip={trip} />
          <IonCardHeader>
            <h2>{trip.trip_name}</h2>
          </IonCardHeader>

          <IonCardContent>
            <h2>
              {'Organised By: '}
              {trip.owner}
              <br />
              {'Dates: '}
              {formatDate(trip.start_date.seconds)}
              {' - '}
              {formatDate(trip.end_date.seconds)}
              <br />
              {'Location: '}
              {trip.destination}
            </h2>
          </IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  );
};
export default TripsList;
