import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IonCard, IonCardTitle, IonCardSubtitle } from '@ionic/react';

import TravelCard from './TravelCard';
import AccomodationCard from './AccomodationCard';
import ExcursionCard from './ExcursionCard';
import BuddiesCard from './BuddiesCard';

import getTripById from '../tripById.api';

const Trip = () => {
  const tripId = useParams();
  const [trip, setTrip] = useState(tripId.trip_id);
  useEffect(() => {
    getTripById(trip, setTrip);
  }, []);

  return (
    <>
      <IonCard color="light">
        <IonCardTitle>
          {'15 days until '}
          {trip.trip_name}
        </IonCardTitle>
        <IonCardSubtitle>
          {'Location: '}
          {trip.destination}
        </IonCardSubtitle>
        <IonCardSubtitle>{'With: '}</IonCardSubtitle>
      </IonCard>

      <TravelCard />

      <AccomodationCard />

      <ExcursionCard />

      <BuddiesCard />

      <IonCard>
        <IonCardTitle>Notes</IonCardTitle>
      </IonCard>
    </>
  );
};

export default Trip;
