import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonHeader,
  IonCardContent,
  IonContent,
} from '@ionic/react';

import getAccommodationByTripId from '../../api/AccomCard.api';
import deleteAccommByID from '../../api/deleteAccommByID.api';

const AccommodationDetails = () => {
  const history = useHistory();
  const { tripId } = useParams();

  const [accommodation, setAccommodation] = useState([]);

  useEffect(() => {
    getAccommodationByTripId(tripId, setAccommodation);
  }, []);

  const deleteAccomm = (ID, hotel) => {
    deleteAccommByID(ID, hotel.accommId).then(() => {
      history.go(0);
    });
  };

  return (
    <IonContent>
      <IonHeader
        type="button"
        onClick={() => {
          history.go(-1);
        }}
      >
        <h1>Accommodation</h1>
      </IonHeader>
      <IonButton
        expand="block"
        onClick={() => history.push(`/trips/${tripId}/accommodation/form`)}
      >
        Add new details
      </IonButton>
      {accommodation.map((hotel) => (
        <IonCard key={hotel.hotel_name} color="light">
          <IonCardHeader>
            <IonCardTitle>
              <h5>
                {'Hotel Name: '}
                {hotel.hotel_name}
                <IonButton
                  slot="end"
                  color="light"
                  onClick={() => {
                    deleteAccomm(tripId, hotel);
                  }}
                >
                  🗑
                </IonButton>
              </h5>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>
              <h5>{'Check-In Date: '}</h5>
            </IonCardSubtitle>
            <IonCardSubtitle>
              <h5>
                {'Days: '}
                {hotel.days}
              </h5>
            </IonCardSubtitle>

            <IonCardSubtitle>
              <h5>
                {'Notes: '}
                {hotel.notes}
              </h5>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  );
};
export default AccommodationDetails;
