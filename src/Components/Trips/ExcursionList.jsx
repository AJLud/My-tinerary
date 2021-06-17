import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonHeader,
  IonIcon,
  IonCardContent,
  IonContent,
} from '@ionic/react';
import { trash } from 'ionicons/icons';
import getExcursionByTripID from '../../api/getExcursions.api';
import getTripById from '../../api/tripById.api';
import deleteExcursionByID from '../../api/deleteExcursionById';
import { formatDate } from '../../utils/utils';
import BackButton from '../BackButton';
import Error from '../Error';
import Loading from '../Loading';

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

  if (isLoading) return <Loading />;
  if (isError.status) return <Error isError={isError} />;
  /* eslint-disable */
  return (
    <IonContent>
      <IonHeader className="page-head" class="ion-no-border">
        <BackButton /> {currentTrip.trip_name}
      </IonHeader>
      <IonCardContent>
        <IonCardTitle color="danger">
          {'Dates: '}
          {formatDate(currentTrip.start_date.seconds)}
          {' - '}
          {formatDate(currentTrip.end_date.seconds)}
        </IonCardTitle>
        <br />
        <IonCardTitle color="danger">Excursions </IonCardTitle>
      </IonCardContent>
      <IonButton
        color="secondary"
        expand="block"
        size="large"
        onClick={() => history.push(`/trips/${tripId}/excursions/form`)}
      >
        Add new details
      </IonButton>
      {excursions.map((excursion) => (
        <IonCard key={excursion.excursionID} color="primary">
          <IonCardHeader>
            =
            <h2>
              {'Event: '}
              {excursion.name}
            </h2>
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
            <IonIcon
              icon={trash}
              onClick={() => {
                deleteExcursion(tripId, excursion);
              }}
            />
          </IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  );
};

export default ExcursionList;
