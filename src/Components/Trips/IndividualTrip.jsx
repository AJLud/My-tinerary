import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
/* eslint-disable */
import { IonCard, IonCardTitle, IonButton, IonContent } from '@ionic/react';
/* eslint-enable */
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
      <BackButton />
      <IonCard color="light">
        <IonCardTitle>
          <h1>
            <Countdown trip={currentTrip} />
            {currentTrip.trip_name}
          </h1>
        </IonCardTitle>
        <h2>
          {'Location: '}
          {currentTrip.destination}
        </h2>
        <h2>
          {'Dates: '}
          {formatDate(currentTrip.start_date.seconds)}
          {' - '}
          {formatDate(currentTrip.end_date.seconds)}
        </h2>
      </IonCard>

      <TripSectionBrief section="Accommodation" tripId={tripId} />
      <TripSectionBrief section="Travel" tripId={tripId} />
      <TripSectionBrief section="Excursions" tripId={tripId} />
      <TripSectionBrief section="Notes" tripId={tripId} />

      <IonButton
        expand="block"
        color="danger"
        onClick={() => {
          deleteTrip(tripId);
        }}
      >
        Delete
      </IonButton>
    </IonContent>
  );
};

export default Trip;
