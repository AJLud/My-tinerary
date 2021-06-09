import React from 'react';

import { IonCard, IonCardTitle, IonCardSubtitle } from '@ionic/react';

import TravelCard from './TravelCard';
import AccomodationCard from './AccomodationCard';
import ExcursionCard from './ExcursionCard';
import BuddiesCard from './BuddiesCard';

const Trip = () => (
  <>
    <IonCard>
      <IonCardTitle>15 Days until Spain</IonCardTitle>
      <IonCardSubtitle>Lads Trip</IonCardSubtitle>
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

export default Trip;
