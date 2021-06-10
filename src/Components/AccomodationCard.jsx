import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';
import getAccommodationByTripId from '../AccomCard.api';

const AccomodationCard = (id) => {
  const history = useHistory();
  const [accommodation, setAccommodation] = useState([]);
  /* eslint-disable */
  const tripID = id.id.trip_id;
  /* eslint-enable */
  useEffect(() => {
    getAccommodationByTripId(tripID, setAccommodation);
  }, []);

  return (
    <>
      <IonCard>
        <IonCardTitle>Accomodation</IonCardTitle>
        <IonList>
          <IonItem>
            {'Accommodation Name: '}
            {accommodation.hotel_name}
          </IonItem>
          <IonItem>
            {'Address: '}
            {accommodation.address}
          </IonItem>
          <IonItem>{'Nights: '}</IonItem>
          <IonItem>
            {'Board Type: '}
            {accommodation.board}
          </IonItem>
        </IonList>

        <IonButton color="success" onClick={() => history.push('/form')}>
          Edit
        </IonButton>
      </IonCard>
    </>
  );
};

export default AccomodationCard;
