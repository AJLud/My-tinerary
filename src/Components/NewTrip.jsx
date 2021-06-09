import {
  IonInput,
  IonContent,
  IonItem,
  IonItemDivider,
  IonList,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const NewTrip = () => (
  <>
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
        <IonButton expand="block" color="danger">
          <Link to="/trips">Submit</Link>
        </IonButton>
      </IonList>

      <IonButton color="success">
        <Link to="/trips">Cancel</Link>
      </IonButton>
    </IonContent>
  </>
);

export default NewTrip;
