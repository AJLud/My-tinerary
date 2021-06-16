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
  IonIcon,
  IonContent,
} from '@ionic/react';
import { trash } from 'ionicons/icons';
import getTravelByTripId from '../../api/getTravel.api';
import getTripById from '../../api/tripById.api';
import deleteTravelByID from '../../api/deleteTravelById.api';
import { formatDate } from '../../utils/utils';
import BackButton from '../BackButton';
import Error from '../Error';
import Loading from '../Loading';

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

  if (isLoading) return <Loading />;
  if (isError.status) return <Error isError={isError} />;
  return (
    <IonContent>
      <IonHeader className="page-head" class="ion-no-border">
        <BackButton />
        {currentTrip.trip_name}
      </IonHeader>

      <h2>
        {formatDate(currentTrip.start_date.seconds)}
        {' - '}
        {formatDate(currentTrip.end_date.seconds)}
      </h2>
      <h2>Travel</h2>

      <IonButton
        color="secondary"
        expand="block"
        size="large"
        onClick={() => history.push(`/trips/${tripId}/travel/form`)}
      >
        Add new details
      </IonButton>
      {travel.map((journey) => (
        <IonCard key={journey.travelId} color="primary">
          <IonCardHeader>
            <IonCardTitle>
              <h5>
                {'Direction: '}
                {journey.direction}
                <IonButton color="light">🗑</IonButton>
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
                {'Budget: '}
                {journey.cost}
              </h5>
            </IonCardSubtitle>
            <IonCardSubtitle>
              <h5>
                {'Transport Type: '}
                {journey.transport}
              </h5>
            </IonCardSubtitle>
            <IonIcon
              icon={trash}
              onClick={() => {
                deleteTravel(tripId, journey.travelId);
              }}
            />
          </IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  );
};

export default TravelList;
