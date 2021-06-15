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

const ExcursionList = () => {
  const history = useHistory();
  const { tripId } = useParams();
  const [excursions, setExcursions] = useState([]);
  const [currTrip, setCurrTrip] = useState({});

  useEffect(() => {
    getExcursionByTripID(tripId, setExcursions);
    getTripById(tripId, setCurrTrip);
  }, []);

  return (
    <IonContent>
      <IonHeader>
        <h1>{currTrip.trip_name}</h1>
        <h2>Excursions</h2>
      </IonHeader>
      <IonButton
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
              </h5>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>
              <h5>{'Date/Time: '}</h5>
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
