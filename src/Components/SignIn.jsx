import { React } from 'react';
import {
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonContent,
} from '@ionic/react';
import { Link } from 'react-router-dom';

/* eslint-disable */
const SignIn = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  return (
    <>
      <IonContent>
        <Link to="/signup">
          <IonButton>Sign up</IonButton>
        </Link>
        <IonItem>
          <IonLabel>
            <IonInput type="text" placeholder=" ...Username">
              Enter Username
            </IonInput>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonInput type="password" placeholder=" ...Password">
            Enter Password
          </IonInput>
        </IonItem>
      </IonContent>
    </>
  );
  /* eslint-enable */
};
export default SignIn;
