import {
  IonInput,
  IonContent,
  IonItem,
  IonItemDivider,
  IonList,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButton,
} from '@ionic/react';
import React from 'react';

const NewTrip = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Plan New Trip ⛅ </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItemDivider>Name your trip</IonItemDivider>
        <IonItem>
          <IonInput type="text" placeholder="Amazing Holiday 🌞 " />
        </IonItem>
        <IonItemDivider>Input Start Date</IonItemDivider>
        <IonItem>
          <IonInput type="date" />
        </IonItem>
        <IonItemDivider>Input End Date</IonItemDivider>
        <IonItem>
          <IonInput type="date" />
        </IonItem>
        <IonItemDivider>Destination</IonItemDivider>
        <IonItem>
          <IonInput type="text" placeholder="Input Destination" />
        </IonItem>
        <IonItemDivider>Notes</IonItemDivider>
        <IonItem>
          <IonInput type="text" placeholder="Notes..." />
        </IonItem>
        <IonButton expand="block">Submit</IonButton>
      </IonList>
    </IonContent>
  </IonPage>
);

export default NewTrip;
