import React from 'react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import BackButton from '../BackButton';

const checkboxList = [
  { val: 'Boarding Pass', isChecked: false },
  { val: 'Passport', isChecked: false },
  { val: 'Camera', isChecked: false },
];

const TravelNotes = () => (
  //   const [checked, setChecked] = useState(false);
  <IonContent>
    <IonHeader>
      <BackButton />
      <IonToolbar>
        <IonTitle>Checklist!</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {checkboxList.map(({ val, isChecked }) => (
          <IonItem key={val}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked} />
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  </IonContent>
);

export default TravelNotes;
