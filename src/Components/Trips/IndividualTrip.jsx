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

import Loading from '../Loading';
import deleteTripByID from '../../api/deleteTripById.api';
import BackButton from '../BackButton';

const Trip = () => {
  const history = useHistory();
  const { tripId } = useParams();
  const [currTrip, setCurrTrip] = useState(tripId);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getTripById(currTrip, setCurrTrip);
      setIsLoading(false);
    }, 1000);
  }, []);

  const deleteTrip = (tripID) => {
    deleteTripByID(tripID).then(() => {
      history.go(-1);
    });
  };

  if (isLoading) return <Loading />;

  return (
    <IonContent>

    <BackButton />
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
