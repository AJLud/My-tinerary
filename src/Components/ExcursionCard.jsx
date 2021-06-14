import React, { useState, useEffect } from 'react';

import {
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
  IonItemDivider,
  IonTextarea,
  IonCard,
  IonLabel,
  IonToggle,
} from '@ionic/react';
import getExcursionsByTripId from '../api/ExcursionCard.api';

const ExcursionCard = (id) => {
  /* eslint-disable */
  const tripID = id.id.trip_id;
  /* eslint-enable */
  const [excursions, setExcursions] = useState([]);
  const [editable, setEditable] = useState(true);

  useEffect(() => {
    getExcursionsByTripId(tripID, setExcursions);
  }, []);

  const updateDetails = () => {
    if (editable === false) {
      setEditable(true);
    } else setEditable(false);
  };
  return (
    <form>
      <IonCard>
        <IonCardTitle>Excursions</IonCardTitle>
        <IonList>
          <IonItem>
            <IonLabel>Edit</IonLabel>
            <IonToggle
              onClick={() => {
                updateDetails();
              }}
              slot="start"
            />
          </IonItem>

          <IonItemDivider>Place:</IonItemDivider>
          <IonItem>
            <IonTextarea value={excursions.event} disabled={editable} />
          </IonItem>
          <IonItemDivider>Cost:</IonItemDivider>
          <IonItem>
            <IonTextarea value={excursions.cost} disabled={editable} />
          </IonItem>
        </IonList>
      </IonCard>
      <IonButton color="success">Update</IonButton>
    </form>
  );
};

export default ExcursionCard;
