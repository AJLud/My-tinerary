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
import getTravelByTripId from '../api/TravelCard.api';

const TravelCard = (id) => {
  const [travel, setTravel] = useState([]);
  const [editable, setEditable] = useState(true);

  /* eslint-disable */
  const tripID = id.id.trip_id;
  /* eslint-enable */
  useEffect(() => {
    getTravelByTripId(tripID, setTravel);
  }, []);

  const updateDetails = () => {
    if (editable === false) {
      setEditable(true);
    } else setEditable(false);
  };
  return (
    <form>
      <IonCard>
        <IonCardTitle>Travel</IonCardTitle>
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
          <IonItemDivider>Transport:</IonItemDivider>
          <IonItem>
            <IonTextarea value={travel.transport} disabled={editable} />
          </IonItem>
          <IonItemDivider>Departing From:</IonItemDivider>
          <IonItem>
            <IonTextarea />
          </IonItem>
          <IonItemDivider>Departure Time: </IonItemDivider>
          <IonItem>
            <IonTextarea />
          </IonItem>
          <IonItemDivider>Arrival Time:</IonItemDivider>
          <IonItem>
            <IonTextarea />
          </IonItem>
        </IonList>
      </IonCard>
      <IonButton color="success">Update</IonButton>
    </form>
  );
};

export default TravelCard;
