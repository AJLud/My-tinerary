import { IonContent, IonCardTitle } from '@ionic/react';
import React from 'react';
import '../theme/planetest.css';

const Loading = () => (
  <IonContent className="loading">
    <IonCardTitle className="loading-title">
      Organising your trips....
    </IonCardTitle>
    <img
      src="https://www.jing.fm/clipimg/full/203-2033437_plane-svg-png-icon-free-download-plane-icon.png"
      alt="plane"
      className="loading-plane"
    />
  </IonContent>
);

export default Loading;
