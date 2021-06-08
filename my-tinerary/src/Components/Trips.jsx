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

const Homepage = () => (
  <>
    <IonButton>Current Trips</IonButton>
    <IonButton>Previous Trips</IonButton>
    <IonButton color="secondary">
      <Link to="/trips/new-trip">Start new trip!!!</Link>
    </IonButton>
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>54 days until... </IonCardSubtitle>
        <IonCardTitle>Spain</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Keep close to Nature&apos;s heart... and break clear away, once in
        awhile, and climb a mountain or spend a week in the woods. Wash your
        spirit clean.
      </IonCardContent>
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
