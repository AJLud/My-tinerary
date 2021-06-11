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
import getAccommodationByTripId from '../AccomCard.api';

const AccomodationCard = (id) => {
  const [accommodation, setAccommodation] = useState([]);
  // const [updatedAccomm, setUpdatedAccomm] = useState({});
  const [editable, setEditable] = useState(true);
  /* eslint-disable */
  const tripID = id.id.trip_id;
  /* eslint-enable */
  useEffect(() => {
    getAccommodationByTripId(tripID, setAccommodation);
  }, []);

  const updateEditable = () => {
    if (editable === false) {
      setEditable(true);
    } else setEditable(false);
  };

  const updateDetails = () => {
    console.log('hello');
  };

  return (
    <form>
      <IonCard onIonSubmit={updateDetails()}>
        <IonCardTitle>Accomodation</IonCardTitle>
        <IonList>
          <IonItem>
            <IonLabel>Edit</IonLabel>
            <IonToggle
              onIonChange={() => {
                if (editable === true) {
                  console.log('hey');
                  updateEditable();
                }
              }}
              slot="start"
            />
          </IonItem>

          <IonItemDivider>Place:</IonItemDivider>
          <IonItem>
            <IonTextarea
              value={accommodation.hotel_name}
              disabled={editable}
              onIonChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </IonItem>
          <IonItemDivider>Address:</IonItemDivider>
          <IonItem>
            <IonTextarea
              value={accommodation.address}
              disabled={editable}
              onIonChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </IonItem>
          <IonItemDivider>Rooms: </IonItemDivider>
          <IonItem>
            <IonTextarea
              value={accommodation.rooms}
              disabled={editable}
              onIonChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </IonItem>
          <IonItemDivider>Board:</IonItemDivider>
          <IonItem>
            <IonTextarea
              value={accommodation.board}
              disabled={editable}
              onIonChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </IonItem>
        </IonList>
      </IonCard>
      <IonButton color="success">Update</IonButton>
    </form>
  );
};

export default AccomodationCard;
