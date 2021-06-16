import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  IonCardSubtitle,
  IonButton,
  IonContent,
  IonHeader,
} from '@ionic/react';

import getTripById from '../../api/tripById.api';
import TripSectionBrief from './TripSectionBrief';
import Loading from '../Loading';
import deleteTripByID from '../../api/deleteTripById.api';
import BackButton from '../BackButton';
import Error from '../Error';
import Countdown from './Countdown';
import { formatDate } from '../../utils/utils';

const Trip = () => {
  const history = useHistory();
  const { tripId } = useParams();
  const [currentTrip, setCurrentTrip] = useState({});
  const [isError, setIsError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getTripById(tripId).then((specificTrip) => {
        setCurrentTrip(specificTrip);
        setIsLoading(false);
      });
    }, 1000);
  }, []);

  const deleteTrip = (tripID) => {
    deleteTripByID(tripID)
      .then(() => {
        history.go(-1);
      })
      .catch((err) => setIsError({ status: true, message: err }));
  };

  if (isLoading) return <Loading />;
  if (isError.status) return <Error isError={isError} />;
  return (
    <IonContent>
      <IonHeader className="page-head" class="ion-no-border">
        <BackButton />
        <IonCardSubtitle className="page-head">
          <Countdown trip={currentTrip} />
          {currentTrip.trip_name}
        </IonCardSubtitle>
      </IonHeader>

      <br />
      <IonCardSubtitle color="secondary">
        {'Location: '}
        {currentTrip.destination}
      </IonCardSubtitle>
      <IonCardSubtitle color="secondary">
        {'Dates: '}
        {formatDate(currentTrip.start_date.seconds)}
        {' - '}
        {formatDate(currentTrip.end_date.seconds)}
      </IonCardSubtitle>
      <br />

      <IonButton
        onClick={() => {
          history.push(`/trips/${tripId}/chat`);
        }}
      >
        Chat
      </IonButton>
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
