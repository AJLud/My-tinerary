import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';
import getTravelByTripId from '../api/TravelCard.api';

const TravelCard = (id) => {
  const history = useHistory();
  const [travel, setTravel] = useState([]);

  /* eslint-disable */
  const tripID = id.id.trip_id;
  /* eslint-enable */
  useEffect(() => {
    getTravelByTripId(tripID, setTravel);
  }, []);

  return (
    <>
      <IonCard>
        <IonCardTitle>Travel ✈️</IonCardTitle>
        <IonList>
          <IonItem>
            {'Departing from: '}
            {travel.leavingFrom}
          </IonItem>
          <IonItem>
            {'Transport: '}
            {travel.transport}
          </IonItem>
          <IonItem>{'Departure Time: '}</IonItem>
          <IonItem>{'Arrival Time: '}</IonItem>
        </IonList>

        <IonButton color="success" onClick={() => history.push('/form')}>
          Edit
        </IonButton>
      </IonCard>
    </>
  );
};

export default TravelCard;
