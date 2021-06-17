import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  IonContent,
  IonHeader,
  IonCheckbox,
  IonList,
  IonItem,
  IonButton,
  IonLabel,
} from '@ionic/react';
import BackButton from '../BackButton';
import { formatDate } from '../../utils/utils';
import Loading from '../Loading';
import getTripById from '../../api/tripById.api';

const checkboxList = [
  { val: 'Boarding Pass', isChecked: false },
  { val: 'Passport', isChecked: false },
  { val: 'Camera', isChecked: false },
  { val: 'Suncream', isChecked: false },
  { val: 'Snacks', isChecked: false },
];

const TravelNotes = () => {
  const { tripId } = useParams();
  const [currentTrip, setCurrentTrip] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTripById(tripId).then((specificTrip) => {
      setCurrentTrip(specificTrip);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    //   const [checked, setChecked] = useState(false);
    <IonContent>
      <IonHeader className="page-head" class="ion-no-border">
        <BackButton />
        {currentTrip.trip_name}
      </IonHeader>

      <h2>
        {formatDate(currentTrip.start_date.seconds)}
        {' - '}
        {formatDate(currentTrip.end_date.seconds)}
      </h2>

      <h2>Checklist</h2>

      <IonButton color="secondary" expand="block" size="large">
        Add
      </IonButton>

      <IonList>
        {checkboxList.map(({ val, isChecked }) => (
          <IonItem key={val}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked} />
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default TravelNotes;
