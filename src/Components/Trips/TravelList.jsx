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

import getTravelByTripId from '../../api/getTravel.api';
import deleteTravelByID from '../../api/deleteTravelById.api';
import { formatDate } from '../../utils/utils';

const TravelList = () => {
  const history = useHistory();
  const { tripId } = useParams();

  const [travel, setTravel] = useState([]);

  useEffect(() => {
    getTravelByTripId(tripId, setTravel);
  }, []);

  const deleteTravel = (ID, journey) => {
    deleteTravelByID(ID, journey).then(() => {
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
        <h1>Travel</h1>
      </IonHeader>
      <IonButton
        color="secondary"
        expand="block"
        onClick={() => history.push(`/trips/${tripId}/travel/form`)}
      >
        Add new details
      </IonButton>
      {travel.map((journey) => (
        <IonCard key={journey.travelId} color="primary">
          <IonCardHeader>
            <IonCardTitle>
              <h5>
                {'Direction: '}
                {journey.direction}
                <IonButton
                  color="light"
                  onClick={() => {
                    deleteTravel(tripId, journey.travelId);
                  }}
                >
                  🗑
                </IonButton>
              </h5>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>
              <h5>
                {'Departure Date: '}
                {formatDate(journey.leavingDate.seconds)}
              </h5>
            </IonCardSubtitle>
            <IonCardSubtitle>
              <h5>
                {'Leaving From: '}
                {journey.leavingFrom}
              </h5>
            </IonCardSubtitle>
            <IonCardSubtitle>
              <h5>
                {'Arriving At: '}
                {journey.arrivingAt}
              </h5>
            </IonCardSubtitle>
            <IonCardSubtitle>
              <h5>
                {'Cost: '}
                {journey.cost}
              </h5>
            </IonCardSubtitle>
            <IonCardSubtitle>
              <h5>
                {'Transport Type: '}
                {journey.transport}
              </h5>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  );
};

export default TravelList;
