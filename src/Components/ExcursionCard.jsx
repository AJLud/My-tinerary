import React from 'react';

import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';

const ExcursionCard = () => (
  <>
    <IonCard>
      <IonCardTitle>Excursions</IonCardTitle>
      <IonList>
        <IonItem>Date</IonItem>
        <IonItem>Cost</IonItem>
        <IonItem>Location</IonItem>
        <IonItem>Mode of transport</IonItem>
      </IonList>
      <IonButton>Edit</IonButton>
    </IonCard>
  </>
);

export default ExcursionCard;
