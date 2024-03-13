import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const VisitCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Retrieve visit count from Firestore
    const visitRef = db.collection("visitorCounter").doc("counter");
    visitRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setVisits(doc.data().count);
        } else {
          // Initialize the counter if it doesn't exist
          visitRef.set({ count: 0 });
        }
      })
      .catch((error) => {
        console.error("Error fetching visit count:", error);
      });
  }, []);

  const incrementVisitCount = () => {
    // Increment visit count in Firestore
    db.collection("visitorCounter")
      .doc("counter")
      .update({
        count: firebase.firestore.FieldValue.increment(1),
      })
      .then(() => {
        setVisits((prevVisits) => prevVisits + 1);
      })
      .catch((error) => {
        console.error("Error incrementing visit count:", error);
      });
  };

  return (
    <div>
      <p>{visits}</p>
      <button onClick={incrementVisitCount}>Increment Visit Count</button>
    </div>
  );
};

export default VisitCounter;
