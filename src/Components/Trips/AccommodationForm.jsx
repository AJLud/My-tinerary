import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  IonCardTitle,
  IonList,
  IonItem,
  IonButton,
  IonTextarea,
  IonCard,
  IonHeader,
  IonContent,
  IonInput,
} from '@ionic/react';

import postAccommodationDetails from '../../api/postAccom';
import BackButton from '../BackButton';
import Error from '../Error';

const AccommodationForm = () => {
  const [isPosted, setIsPosted] = useState(false);
  const history = useHistory();
  const tripId = useParams();
  const [isError, setIsError] = useState({});

  const [newAccommodation, setNewAccommodation] = useState({
    days: '',
    hotel_name: '',
    check_in: '',
    notes: '',
  });

  const newDate = (date) => new Date(date).getTime() / 1000;

  useEffect(() => {
    if (isPosted) {
      history.push(`/trips/${tripId.tripId}/accommodation`);
    }
  }, [isPosted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkIn = newDate(newAccommodation.check_in);
    newAccommodation.check_in = {
      seconds: checkIn,
      nanoseconds: 0,
    };
    postAccommodationDetails(newAccommodation, tripId)
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
        Accommodation
      </IonHeader>

      <form onSubmit={handleSubmit}>
        <IonCard>
          <IonList>
            <IonCardTitle color="danger">Venue:</IonCardTitle>
            <IonItem>
              <IonInput
                color="danger"
                type="text"
                placeholder="..."
                required
                value={newAccommodation.hotel_name}
                onIonChange={(event) => {
                  setNewAccommodation((currAccommodation) => {
                    const copyAccommodation = { ...currAccommodation };
                    copyAccommodation.hotel_name = event.target.value;
                    return copyAccommodation;
                  });
                }}
              />
            </IonItem>
            <IonCardTitle color="danger">Check-In Date:</IonCardTitle>
            <IonItem>
              <IonInput
                color="danger"
                type="date"
                required
                value={newAccommodation.check_in}
                onIonChange={(event) => {
                  setNewAccommodation((currAccommodation) => {
                    const copyAccommodation = { ...currAccommodation };
                    copyAccommodation.check_in = event.target.value;
                    return copyAccommodation;
                  });
                }}
              />
            </IonItem>
            <IonCardTitle color="danger">Nights: </IonCardTitle>
            <IonItem>
              <IonInput
                color="danger"
                type="text"
                required
                value={newAccommodation.days}
                placeholder="..."
                onIonChange={(event) => {
                  setNewAccommodation((currAccommodation) => {
                    const copyAccommodation = { ...currAccommodation };
                    copyAccommodation.days = event.target.value;
                    return copyAccommodation;
                  });
                }}
              />
            </IonItem>
            <IonCardTitle color="danger">Notes:</IonCardTitle>

            <IonTextarea
              color="danger"
              type="text"
              placeholder="Half-Board, 2 Bed, etc"
              value={newAccommodation.notes}
              onIonChange={(event) => {
                setNewAccommodation((currAccommodation) => {
                  const copyAccommodation = { ...currAccommodation };
                  copyAccommodation.notes = event.target.value;
                  return copyAccommodation;
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

export default AccommodationForm;
