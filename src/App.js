import { IonButton, IonToast } from "@ionic/react";
import React, { useState } from "react";

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <div>
      <header>
        <h1> My App </h1>{" "}
      </header>{" "}
      <main>
        <IonButton onClick={handleClick}> Click Me </IonButton>{" "}
        <IonToast isOpen={showToast} message="Hello world!" />
      </main>
    </div>
  );
}

export default App;
