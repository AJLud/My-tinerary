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
import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const NewTrip = () => {
  const [newTrip, setNewTrip] = useState({
    trip_name: '',
    destination: '',
  });
  console.log(newTrip);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Plan New Trip ⛅ </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form>
          <IonList>
            <IonItemDivider>Name your trip</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                placeholder="Amazing Holiday 🌞 "
                required
                value={newTrip.trip_name}
                onIonChange={(event) => {
                  setNewTrip((currTrip) => {
                    const copyTrip = { ...currTrip };
                    copyTrip.trip_name = event.target.value;
                    return copyTrip;
                  });
                }}
              />
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
              <IonInput
                type="text"
                placeholder="Input Destination"
                required
                value={newTrip.destination}
                onIonChange={(event) => {
                  setNewTrip((currTrip) => {
                    const copyTrip = { ...currTrip };
                    copyTrip.destination = event.target.value;
                    return copyTrip;
                  });
                }}
              />
            </IonItem>
            <IonItemDivider>Notes</IonItemDivider>
            <IonItem>
              <IonInput type="text" placeholder="Notes..." />
            </IonItem>
            <IonButton type="submit" expand="block" color="danger">
              submit
            </IonButton>
          </IonList>
        </form>
        {/* we need to get the submit button to work onclick */}
        <IonButton color="success">
          <Link to="/trips">Cancel</Link>
        </IonButton>
      </IonContent>
    </>
  );
};

export default NewTrip;
