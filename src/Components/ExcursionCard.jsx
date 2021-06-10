import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
} from '@ionic/react';
import getExcursionsByTripId from '../ExcursionCard.api';

const ExcursionCard = (id) => {
  const history = useHistory();
  /* eslint-disable */
  const tripID = id.id.trip_id;
  /* eslint-enable */
  const [excursions, setExcursions] = useState([]);

  useEffect(() => {
    getExcursionsByTripId(tripID, setExcursions);
  }, []);

  return (
    <>
      <IonCard>
        <IonCardTitle>Excursions</IonCardTitle>
        <IonList>
          <IonItem>
            {'Event: '}
            {excursions.event}
          </IonItem>
          <IonItem>
            {'Cost: '}
            {excursions.cost}
          </IonItem>
        </IonList>

        <IonButton color="success" onClick={() => history.push('/form')}>
          Edit
        </IonButton>
      </IonCard>
    </>
  );
};

export default ExcursionCard;
