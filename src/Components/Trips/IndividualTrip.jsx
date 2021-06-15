import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonContent,
} from '@ionic/react';

import getTripById from '../../api/tripById.api';
import TripSectionBrief from './TripSectionBrief';

const Trip = () => {
  const history = useHistory();
  const { tripId } = useParams();

  const [currTrip, setCurrTrip] = useState(tripId);

  useEffect(() => {
    getTripById(currTrip, setCurrTrip);
  }, []);

  return (
    <ion-content overflow-scroll="true" class="has-header">
      <IonContent>
        <IonCard color="light">
          <IonCardTitle>
            {'15 days until '}
            {currTrip.trip_name}
          </IonCardTitle>
          <IonCardSubtitle>
            {'Location: '}
            {currTrip.destination}
          </IonCardSubtitle>
        </IonCard>

        <TripSectionBrief section="Accommodation" tripId={tripId} />
        <TripSectionBrief section="Travel" tripId={tripId} />
        <TripSectionBrief section="Excursions" tripId={tripId} />
        <TripSectionBrief section="Notes" tripId={tripId} />

        <IonButton color="danger" onClick={() => history.push('/form')}>
          Edit Details
        </IonButton>
      </IonContent>
    </ion-content>
  );
};

export default Trip;
