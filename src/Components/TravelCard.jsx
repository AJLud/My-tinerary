import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';

const TravelCard = (trip) => {
  console.log(trip);
  return (
    <>
      <IonCard>
        <IonCardTitle>Travel ✈️</IonCardTitle>
        <IonList>
          <IonItem>Airport</IonItem>
          <IonItem>Departure Time</IonItem>
          <IonItem>Flight number</IonItem>
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

export default TravelCard;
