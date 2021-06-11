import { React } from 'react';
import { Link } from 'react-router-dom';
/*eslint-disable */
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import {
  airplane,
  people,
  person,
  triangle,
  chatbubbles,
  home,
} from 'ionicons/icons';

const Navbar = () => (
  <IonFab vertical="bottom" horizontal="end">
    <IonFabButton color="light">
      <IonIcon icon={triangle} />
    </IonFabButton>
    <IonFabList side="top">
      <IonFabButton>
        <Link to="/profile">
          <IonIcon icon={person} />
        </Link>
      </IonFabButton>
      <IonFabButton>
        <Link to="/buddies">
          <IonIcon icon={people} />
        </Link>
      </IonFabButton>
      <IonFabButton>
        <Link to="/chats">
          <IonIcon icon={chatbubbles} />
        </Link>
      </IonFabButton>
      <IonFabButton>
        <Link to="/trips">
          <IonIcon icon={airplane} />
        </Link>
      </IonFabButton>
      <IonFabButton>
        <Link to="/">
          <IonIcon icon={home} />
        </Link>
      </IonFabButton>
    </IonFabList>
  </IonFab>
);

export default Navbar;
