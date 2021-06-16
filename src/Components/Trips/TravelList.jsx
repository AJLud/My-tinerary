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
import getTripById from '../../api/tripById.api';
import deleteTravelByID from '../../api/deleteTravelById.api';
import { formatDate } from '../../utils/utils';
import BackButton from '../BackButton';
import Error from '../Error';

const TravelList = () => {
  const history = useHistory();
  const { tripId } = useParams();
  const [currentTrip, setCurrentTrip] = useState({});
  const [isError, setIsError] = useState({});
  const [travel, setTravel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTravelByTripId(tripId, setTravel);
    getTripById(tripId).then((specificTrip) => {
      setCurrentTrip(specificTrip);
      setIsLoading(false);
    });
  }, []);

  const deleteTravel = (ID, journey) => {
    deleteTravelByID(ID, journey)
      .then(() => {
        history.go(0);
      })
      .catch((err) => setIsError({ status: true, message: err }));
  };

  if (isLoading) return <p>Loading</p>;
  if (isError.status) return <Error isError={isError} />;
  return (
    <IonContent>
      <nav>
        {' '}
        <BackButton />
        <IonButton
          onClick={() => {
            history.push(`/trips/${tripId}`);
          }}
        >
          Back To Trip
        </IonButton>
      </nav>

      <IonHeader>
        <h1>{currentTrip.trip_name}</h1>
        <h2>
          {formatDate(currentTrip.start_date.seconds)}
          {' - '}
          {formatDate(currentTrip.end_date.seconds)}
        </h2>
        <h2>Travel</h2>
      </IonHeader>
      <IonButton
        expand="block"
        onClick={() => history.push(`/trips/${tripId}/travel/form`)}
      >
        Add new details
      </IonButton>
      {travel.map((journey) => (
        <IonCard key={journey.travelId} color="light">
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
