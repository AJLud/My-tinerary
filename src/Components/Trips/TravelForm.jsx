import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
  IonCard,
  IonContent,
  IonInput,
  IonHeader,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import postTravelDetails from '../../api/postTravel';
import BackButton from '../BackButton';
import Error from '../Error';

const TravelForm = () => {
  const [isPosted, setIsPosted] = useState(false);
  const history = useHistory();
  const tripId = useParams();
  const [isError, setIsError] = useState(false);

  const [newTravel, setNewTravel] = useState({
    cost: '',
    direction: '',
    leavingFrom: '',
    arrivingAt: '',
    leavingDate: '',
    transport: '',
  });

  const newDate = (date) => new Date(date).getTime() / 1000;

  useEffect(() => {
    setNewTravel({
      cost: '',
      direction: '',
      leavingFrom: '',
      arrivingAt: '',
      leavingDate: '',
      transport: '',
    });
    if (isPosted) {
      history.push(`/trips/${tripId.tripId}/travel`);
    }
  }, [isPosted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = newDate(newTravel.leavingDate);
    newTravel.leavingDate = {
      seconds: date,
      nanoseconds: 0,
    };

    postTravelDetails(newTravel, tripId)
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
        Travel
      </IonHeader>

      <form onSubmit={handleSubmit}>
        <IonCard>
          <IonList>
            <IonCardTitle color="danger">Direction: </IonCardTitle>
            <IonItem>
              <IonSelect
                color="danger"
                value={newTravel.direction}
                placeholder="Select One"
                onIonChange={(event) => {
                  setNewTravel((currTravel) => {
                    const copyTravel = { ...currTravel };
                    copyTravel.direction = event.target.value;
                    return copyTravel;
                  });
                }}
              >
                <IonSelectOption value="Outbound">Outbound</IonSelectOption>
                <IonSelectOption value="Inbound">Inbound</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonCardTitle color="danger">Date: </IonCardTitle>
            <IonItem>
              <IonInput
                color="danger"
                type="date"
                required
                value={newTravel.leavingDate}
                onIonChange={(event) => {
                  setNewTravel((currTravel) => {
                    const copyTravel = { ...currTravel };
                    copyTravel.leavingDate = event.target.value;
                    return copyTravel;
                  });
                }}
              />
            </IonItem>
            <IonCardTitle color="danger">Leaving From: </IonCardTitle>
            <IonItem>
              <IonInput
                color="danger"
                type="text"
                required
                placeholder="..."
                value={newTravel.leavingFrom}
                onIonChange={(event) => {
                  setNewTravel((currTravel) => {
                    const copyTravel = { ...currTravel };
                    copyTravel.leavingFrom = event.target.value;
                    return copyTravel;
                  });
                }}
              />
            </IonItem>
            <IonCardTitle color="danger">Arriving At:</IonCardTitle>
            <IonItem>
              <IonInput
                color="danger"
                type="text"
                required
                placeholder="..."
                value={newTravel.arrivingAt}
                onIonChange={(event) => {
                  setNewTravel((currTravel) => {
                    const copyTravel = { ...currTravel };
                    copyTravel.arrivingAt = event.target.value;
                    return copyTravel;
                  });
                }}
              />
            </IonItem>
            <IonCardTitle color="danger">Budget:</IonCardTitle>
            <IonItem>
              <IonInput
                color="danger"
                type="text"
                required
                placeholder="£ / $ / €"
                value={newTravel.cost}
                onIonChange={(event) => {
                  setNewTravel((currTravel) => {
                    const copyTravel = { ...currTravel };
                    copyTravel.cost = event.target.value;
                    return copyTravel;
                  });
                }}
              />
            </IonItem>
            <IonCardTitle color="danger">Transport:</IonCardTitle>
            <IonInput
              color="danger"
              type="text"
              required
              placeholder="Aeroplane / Bus / Train / Taxi"
              value={newTravel.transport}
              onIonChange={(event) => {
                setNewTravel((currTravel) => {
                  const copyTravel = { ...currTravel };
                  copyTravel.transport = event.target.value;
                  return copyTravel;
                });
              }}
            />
          </IonList>
        </IonCard>
        <IonButton
          type="submit"
          size="large"
          expand="block"
          color="secondary"
          className="orange-button"
        >
          Add Details
        </IonButton>
      </form>
      <IonButton
        size="large"
        expand="block"
        color="primary"
        className="blue-button"
        onClick={() => history.go(-1)}
      >
        Cancel
      </IonButton>
    </IonContent>
  );
};

export default TravelForm;
