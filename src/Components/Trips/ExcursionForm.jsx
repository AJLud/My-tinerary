import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  IonList,
  IonItem,
  IonButton,
  IonCardTitle,
  IonItemDivider,
  IonCard,
  IonHeader,
  IonContent,
  IonInput,
} from '@ionic/react';

import postExcursion from '../../api/postExcursion.api';
import BackButton from '../BackButton';
import Error from '../Error';

const FormPage = () => {
  const [isPosted, setIsPosted] = useState(false);
  const history = useHistory();
  const tripId = useParams();
  const [isError, setIsError] = useState({});

  const [newExcursion, setNewExcursion] = useState({
    name: '',
    address: '',
    date: '',
    cost: '',
  });

  const newDate = (date) => new Date(date).getTime() / 1000;

  useEffect(() => {
    let mounted = true;
    if (isPosted && mounted) {
      history.push(`/trips/${tripId.tripId}/excursions`);
    }
    return function cleanup() {
      mounted = false;
    };
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
      .catch((err) => setIsError({ status: true, message: err }));
  };

  if (isError.status) return <Error isError={isError} />;

  return (
    <IonContent>
      <IonHeader className="page-head" class="ion-no-border">
        <BackButton />
        Excursion
      </IonHeader>

      {/* <IonButton
        onClick={() => {
          history.push(`/trips/${tripId.tripId}`);
        }}
      >
        Back To Trip
      </IonButton> */}
      <form onSubmit={handleSubmit}>
        <IonCard>
          <IonList>
            <IonItem>
              <IonCardTitle>Add Plans</IonCardTitle>
            </IonItem>
            <IonItemDivider>Name:</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                required
                placeholder="..."
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
                placeholder="..."
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
            <IonItemDivider>Venue:</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                placeholder="..."
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
        <IonButton type="submit" size="large" expand="block" color="secondary">
          Add Details
        </IonButton>
      </form>
      <IonButton
        size="large"
        expand="block"
        color="primary"
        onClick={() => history.go(-1)}
      >
        Cancel
      </IonButton>
    </IonContent>
  );
};

export default FormPage;
