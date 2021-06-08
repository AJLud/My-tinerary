import { React } from 'react';
import { Link } from 'react-router-dom';
import { IonFab, IonFabButton, IonFabList } from '@ionic/react';

const Navbar = () => (
  <IonFab vertical="bottom" horizontal="end">
    <IonFabButton>Nav</IonFabButton>
    <IonFabList side="top">
      <IonFabButton>
        <Link to="/profile">Profile</Link>
      </IonFabButton>
      <IonFabButton>
        <Link to="/buddies">Buddies</Link>
      </IonFabButton>
      <IonFabButton>
        <Link to="/trips">Trips</Link>
      </IonFabButton>
    </IonFabList>
  </IonFab>
);

export default Navbar;
