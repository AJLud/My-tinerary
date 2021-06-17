import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonHeader,
  IonContent,
  IonCardContent,
} from '@ionic/react';
import BackButton from '../BackButton';
import { formatDate } from '../../utils/utils';

const ArchivedTrips = () => {
  const tripsArr = [
    {
      destination: 'Barcelona',
      end_date: { seconds: 1584886491, nanoseconds: 0 },
      owner: 'Poonam_1478',
      start_date: { seconds: 1584454768, nanoseconds: 0 },
      tripId: '1',
      trip_name: 'Business in Spain',
      date_difference: '1 year, 2 months and 27 days ',
    },
    {
      destination: 'Delhi',
      end_date: { seconds: 1620393291, nanoseconds: 0 },
      owner: 'Bex123',
      start_date: { seconds: 1619097291, nanoseconds: 0 },
      tripId: '2',
      trip_name: 'North Indian Roadtrip',
      date_difference: '42 days',
    },
    {
      destination: 'Glasgow',
      end_date: { seconds: 1611152368, nanoseconds: 0 },
      owner: 'BigDave101',
      start_date: { seconds: 1610806768, nanoseconds: 0 },
      tripId: '3',
      trip_name: 'Glasgow Minibreak',
      date_difference: '149 days',
    },
  ];
  return (
    <IonContent overflow-scroll="true">
      <IonHeader className="page-head" class="ion-no-border">
        <BackButton />
        Archived Trips
      </IonHeader>

      {tripsArr.map((trip) => (
        <IonCard key={trip.tripId} color="primary">
          <IonCardHeader>
            <h5>
              {trip.date_difference}
              {' since '}
            </h5>

            <h2>{trip.trip_name}</h2>
          </IonCardHeader>
          <IonCardContent>
            <h2>
              {'Organised By: '}
              {trip.owner}
              <br />
              {'Dates: '}
              {formatDate(trip.start_date.seconds)}
              {' - '}
              {formatDate(trip.end_date.seconds)}
              <br />
              {'Location: '}
              {trip.destination}
            </h2>
          </IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  );
};
export default ArchivedTrips;
