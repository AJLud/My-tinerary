import React from 'react';
import {
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
} from '@ionic/react';
import { Link } from 'react-router-dom';

// const [trips, setTrip] = useState({
//   trips: [
//     {
//       trip_id: 01,
//       trip_name: 'Big Northcoders Sesh',
//       destination: 'Manchester',
//       start_date: '2021-06-08T20:11:00.000Z',
//     },
//     {
//       trip_id:02,
//       trip_name: 'Middle East Mashup',
//       destination: 'Egypt',
//       start_date: '2021-10-11T20:11:00.000Z',
//     },
//     {
//       trip_id: 03,
//       trip_name: 'West Midlands Mix Up',
//       destination: 'Birmingham',
//       start_date: '2022-01-11T20:11:00.000Z',
//     },
//   ],
// });

const Homepage = () => (
  <>
    <IonButton>Current Trips</IonButton>
    <IonButton>Previous Trips</IonButton>
    <IonButton color="secondary">
      <Link to="/trips/new-trip">Start new trip!!!</Link>
    </IonButton>

    <IonCard>
      <IonButton size="large">
        <Link to="trips/:trip_id">
          <IonCardHeader>
            <IonCardSubtitle>54 days until... </IonCardSubtitle>
            <IonCardTitle>Spain</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature&apos;s heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </Link>
      </IonButton>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>194 days until... </IonCardSubtitle>
        <IonCardTitle>New York</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Keep close to Nature&apos;s heart... and break clear away, once in
        awhile, and climb a mountain or spend a week in the woods. Wash your
        spirit clean.
      </IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>404 days until... </IonCardSubtitle>
        <IonCardTitle>Ireland</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Keep close to Nature&apos;s heart... and break clear away, once in
        awhile, and climb a mountain or spend a week in the woods. Wash your
        spirit clean.
      </IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>404 days until... </IonCardSubtitle>
        <IonCardTitle>Ireland</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Keep close to Nature&apos;s heart... and break clear away, once in
        awhile, and climb a mountain or spend a week in the woods. Wash your
        spirit clean.
      </IonCardContent>
    </IonCard>
  </>
);

export default Homepage;
