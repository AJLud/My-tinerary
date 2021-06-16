import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  IonCardSubtitle,
  IonButton,
  IonContent,
  IonBackButton,
} from '@ionic/react';

import getTripById from '../../api/tripById.api';
import TripSectionBrief from './TripSectionBrief';

import deleteTripByID from '../../api/deleteTripById.api';

const Trip = () => {
  const history = useHistory();
  const { tripId } = useParams();
  const [currTrip, setCurrTrip] = useState(tripId);

  useEffect(() => {
    getTripById(currTrip, setCurrTrip);
  }, []);

  const deleteTrip = (tripID) => {
    deleteTripByID(tripID).then(() => {
      history.go(-1);
    });
  };

  return (
    <IonContent>
      <IonCardSubtitle className="page-head">
        {'15 days until... '}
        {currTrip.trip_name}
      </IonCardSubtitle>

      <br />
      <IonCardSubtitle color="secondary">
        {'Location: '}
        {currTrip.destination}
      </IonCardSubtitle>
      <br />

      <IonBackButton />
      <TripSectionBrief section="Accommodation" tripId={tripId} />
      <TripSectionBrief section="Travel" tripId={tripId} />
      <TripSectionBrief section="Excursions" tripId={tripId} />
      <TripSectionBrief section="Notes" tripId={tripId} />

      <IonButton
        expand="block"
        color="primary"
        onClick={() => {
          deleteTrip(tripId);
        }}
      >
        Delete Trip
      </IonButton>
    </IonContent>
  );
};

export default Trip;
