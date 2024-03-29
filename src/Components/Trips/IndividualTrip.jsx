import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCard,
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
  }, [tripId]);

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
        <IonCardTitle className="page-head">
          {currentTrip.trip_name}
        </IonCardTitle>
      </IonHeader>

      <IonCardContent>
        <IonCardTitle color="danger">
          <Countdown trip={currentTrip} />
          <br />
          {'Dates: '}
          {formatDate(currentTrip.start_date.seconds)}
          {' - '}
          {formatDate(currentTrip.end_date.seconds)}
        </IonCardTitle>
        <br />
        <IonCardTitle color="danger">
          {'Location: '}
          {currentTrip.destination}
        </IonCardTitle>
      </IonCardContent>
      <TripSectionBrief section="Accommodation" tripId={tripId} />
      <TripSectionBrief section="Travel" tripId={tripId} />
      <TripSectionBrief section="Excursions" tripId={tripId} />
      <TripSectionBrief section="Checklist" tripId={tripId} />

      <IonCard
        color="secondary"
        onClick={() => {
          history.push(`/trips/${tripId}/chat`);
        }}
      >
        <IonCardHeader>
          <IonCardTitle>Chat</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonCardSubtitle>
            <h5>
              {'Click here to access your '}
              Chat
            </h5>
          </IonCardSubtitle>
        </IonCardContent>
      </IonCard>
      {/* <TripSectionBrief section="Trip Buddies" tripId={tripId} /> */}
      <IonButton
        expand="block"
        color="primary"
        size="large"
        onClick={() => {
          deleteTrip(tripId);
        }}
      >
        Remove Trip
      </IonButton>
    </IonContent>
  );
};

export default Trip;
