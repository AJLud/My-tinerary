import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
  IonItemDivider,
  IonCard,
  IonContent,
  IonInput,
} from '@ionic/react';

import postExcursion from '../../api/postExcursion.api';
import BackButton from '../BackButton';

const FormPage = () => {
  const [isPosted, setIsPosted] = useState(false);
  const history = useHistory();
  const tripId = useParams();

  const [newExcursion, setNewExcursion] = useState({
    name: '',
    address: '',
    date: '',
    cost: '',
  });

  const newDate = (date) => new Date(date).getTime() / 1000;

  useEffect(() => {
    if (isPosted) {
      setNewExcursion({
        name: '',
        address: '',
        date: '',
        cost: '',
      });
      history.push(`/trips/${tripId.tripId}/excursions`);
    }
  }, [isPosted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = newDate(newExcursion.date);
    newExcursion.date = {
      seconds: date,
      nanoseconds: 0,
    };

    postExcursion(newExcursion, tripId)
      .then(() => {
        setIsPosted(true);
      })
      .catch((err) => console.log('excursion did not post', err));
  };

  return (
    <IonContent>
      <BackButton />
      <IonButton
        onClick={() => {
          history.push(`/trips/${tripId.tripId}`);
        }}
      >
        Back To Trip
      </IonButton>
      <form onSubmit={handleSubmit}>
        <IonCard>
          <IonList>
            <IonItem>
              <IonCardTitle>Excursions</IonCardTitle>
            </IonItem>
            <IonItemDivider>Name:</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                required
                value={newExcursion.name}
                onIonChange={(event) => {
                  setNewExcursion((currExcursion) => {
                    const copyExcursion = { ...currExcursion };
                    copyExcursion.name = event.target.value;
                    return copyExcursion;
                  });
                }}
              />
            </IonItem>
            <IonItemDivider>Date</IonItemDivider>
            <IonItem>
              <IonInput
                type="date"
                required
                value={newExcursion.date}
                onIonChange={(event) => {
                  setNewExcursion((currExcursion) => {
                    const copyExcursion = { ...currExcursion };
                    copyExcursion.date = event.target.value;
                    return copyExcursion;
                  });
                }}
              />
            </IonItem>
            <IonItemDivider>Cost</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                value={newExcursion.cost}
                onIonChange={(event) => {
                  setNewExcursion((currExcursion) => {
                    const copyExcursion = { ...currExcursion };
                    copyExcursion.cost = event.target.value;
                    return copyExcursion;
                  });
                }}
              />
            </IonItem>
            <IonItemDivider>Address:</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                value={newExcursion.address}
                onIonChange={(event) => {
                  setNewExcursion((currExcursion) => {
                    const copyExcursion = { ...currExcursion };
                    copyExcursion.address = event.target.value;
                    return copyExcursion;
                  });
                }}
              />
            </IonItem>
          </IonList>
        </IonCard>
        <IonButton color="success" type="submit" expand="block">
          Add Details
        </IonButton>
      </form>

      <IonButton expand="block" color="danger" onClick={() => history.go(-1)}>
        Cancel
      </IonButton>
    </IonContent>
  );
};

export default FormPage;
