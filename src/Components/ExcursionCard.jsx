import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';

const ExcursionCard = (trip) => {
  console.log(trip);
  return (
    <>
      <IonCard>
        <IonCardTitle>Excursions</IonCardTitle>
        <IonList>
          <IonItem>Date</IonItem>
          <IonItem>Cost</IonItem>
          <IonItem>Location</IonItem>
          <IonItem>Mode of transport</IonItem>
        </IonList>
        <IonButton color="danger">
          <Link to="/trips">Back to Trips</Link>
        </IonButton>
        <IonButton color="success">
          <Link to="/form"> Add Details</Link>
        </IonButton>
      </IonCard>
    </>
  );
};
export default ExcursionCard;
