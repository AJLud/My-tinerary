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
import getTripsByUser from '../api/api';
import * as utils from '../utils/utils';

const Homepage = ({ user }) => {
  const history = useHistory();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    getTripsByUser(user, setUserTrips);
  }, []);

  const setText = (trip) => {
    history.push(`/trips/${trip.tripId}`);
  };
  const currDate = Math.floor(Date.now() / 1000);

  return (
    <>
      {/* is this current trips button necessary now? */}
      <IonButton>Current Trips</IonButton>
      {/* <IonButton>Previous Trips</IonButton>  No longer displaying trips from past separately */}
      <IonButton color="secondary">
        <Link to="/trips/new-trip">Start new trip!!!</Link>
      </IonButton>
      {userTrips.map((trip) => {
        const tripDate = trip.start_date.seconds;
        const timeElapsed = utils.dateDifference(currDate, tripDate);
        console.log(trip.start_date);
        return (
          <IonCard
            key={trip.trip_name}
            color="light"
            onClick={() => setText(trip)}
          >
            <IonCardHeader>
              <IonCardSubtitle>
                <h5>{utils.countdown(timeElapsed)}</h5>
              </IonCardSubtitle>
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
        );
      })}
    </>
  );
};
export default Homepage;
