import { IonContent, IonCardTitle } from '@ionic/react';
import React from 'react';
import '../theme/planetest.css';

const Loading = () => (
  <IonContent className="loading">
    <IonCardTitle className="loading-title">
      Organising your trips....
    </IonCardTitle>
    <img
      src="https://cdn.iconscout.com/icon/free/png-512/aeroplane-airplane-plane-air-transportation-vehicle-pessanger-people-emoj-symbol-30708.png"
      alt="plane"
      className="loading-plane"
    />
  </IonContent>
);

export default Loading;
