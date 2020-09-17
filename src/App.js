import {
  IonButton,
  IonIcon,
  IonToast,
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import { play as playIcon } from 'ionicons/icons';
import React, { useState } from 'react';

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            {' '}
            <h1> My App </h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonButton onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />
          Click Me
        </IonButton>
        <IonToast isOpen={showToast} message="Hello world!" />
      </IonContent>
    </IonApp>
  );
}

export default App;
