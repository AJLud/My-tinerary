import React, { useState, useEffect } from 'react';
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

import getExcursionByTripID from '../../api/getExcursions.api';
import getTripById from '../../api/tripById.api';
import deleteExcursionByID from '../../api/deleteExcursionById';
import { formatDate } from '../../utils/utils';
import BackButton from '../BackButton';
import Error from '../Error';

const ExcursionList = () => {
  const history = useHistory();
  const { tripId } = useParams();
  const [excursions, setExcursions] = useState([]);
  const [currentTrip, setCurrentTrip] = useState({});
  const [isError, setIsError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getExcursionByTripID(tripId, setExcursions);
    getTripById(tripId).then((specificTrip) => {
      setCurrentTrip(specificTrip);
      setIsLoading(false);
    });
  }, []);

  const deleteExcursion = (ID, excursion) => {
    deleteExcursionByID(ID, excursion.excursionID)
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
        <h2>Excursions</h2>
      </IonHeader>
      <IonButton
        expand="block"
        onClick={() => history.push(`/trips/${tripId}/excursions/form`)}
      >
        Add new details
      </IonButton>
      {excursions.map((excursion) => (
        <IonCard key={excursion.excursionID} color="light">
          <IonCardHeader>
            <IonCardTitle>
              <h5>
                {'Event: '}
                {excursion.name}
                <IonButton
                  color="light"
                  onClick={() => {
                    deleteExcursion(tripId, excursion);
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
                {'Date: '}
                {formatDate(excursion.date.seconds)}
              </h5>
            </IonCardSubtitle>
            <IonCardSubtitle>
              <h5>
                {'Time: '}
                {/* {formatTime function} */}
              </h5>
            </IonCardSubtitle>
            <IonCardSubtitle>
              <h5>
                {'Cost: '}
                {excursion.cost}
              </h5>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  );
};

export default ExcursionList;
