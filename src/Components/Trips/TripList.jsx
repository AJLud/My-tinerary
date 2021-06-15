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
    <ion-content overflow-scroll="true" class="has-header">
      <IonContent>
        <IonHeader>
          <h1>Current Trips</h1>
        </IonHeader>

        <Link to="/new-trip">
          <IonButton color="secondary">New Trip</IonButton>
        </Link>

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
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </ion-content>
  );
};
export default TripsList;
