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
/* eslint-disable */
import { trash } from 'ionicons/icons';

import getAccommodationByTripId from '../../api/getAccom.api';
import getTripById from '../../api/tripById.api';
import deleteAccommByID from '../../api/deleteAccommByID.api';
import { formatDate } from '../../utils/utils';
import BackButton from '../BackButton';
import Error from '../Error';
import Loading from '../Loading';

const AccommodationDetails = () => {
  const history = useHistory();
  const { tripId } = useParams();
  const [currentTrip, setCurrentTrip] = useState({});
  const [isError, setIsError] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [accommodation, setAccommodation] = useState([]);

  useEffect(() => {
    getAccommodationByTripId(tripId, setAccommodation);
    getTripById(tripId).then((specificTrip) => {
      setCurrentTrip(specificTrip);
      setIsLoading(false);
    });
  }, []);

  const deleteAccomm = (ID, hotel) => {
    deleteAccommByID(ID, hotel.accommId)
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

      <h2>Accommodation</h2>

      <IonButton
        color="secondary"
        expand="block"
        size="large"
        onClick={() => history.push(`/trips/${tripId}/accommodation/form`)}
      >
        Add new details
      </IonButton>

      {accommodation.map((hotel) => (
        <IonCard key={hotel.accommId} color="primary">
          <IonCardHeader>
            <IonCardTitle>
              <h5>
                {'Hotel Name: '}
                {hotel.hotel_name}
              </h5>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>
              <h5>
                {'Check-In Date: '}
                {formatDate(hotel.check_in.seconds)}
              </h5>
            </IonCardSubtitle>
            <IonCardSubtitle>
              <h5>
                {'Days: '}
                {hotel.days}
              </h5>
            </IonCardSubtitle>

            <IonCardSubtitle>
              <h5>
                {'Notes: '}
                {hotel.notes}
              </h5>
            </IonCardSubtitle>
            <IonIcon
              icon={trash}
              onClick={() => {
                deleteAccomm(tripId, hotel);
              }}
            />
          </IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  );
};
export default AccommodationDetails;
