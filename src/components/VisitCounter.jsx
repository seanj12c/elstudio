import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import NumberCounter from "./NumberCounter";

const firebaseConfig = {
  apiKey: "AIzaSyBW0dzbUkv1AE5ryXs55x54xtX6yMTaCd8",
  authDomain: "elstudio-808d8.firebaseapp.com",
  projectId: "elstudio-808d8",
  storageBucket: "elstudio-808d8.appspot.com",
  messagingSenderId: "886620549368",
  appId: "1:886620549368:web:20d225112c0912256f8b0d",
  measurementId: "G-CV8HFZK8D8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const VisitCounter = () => {
  const [totalVisits, setTotalVisits] = useState(0);

  useEffect(() => {
    const incrementVisitCount = async () => {
      const visitRef = db.collection("visitorCounter").doc("totalCounter");
      try {
        await db.runTransaction(async (transaction) => {
          const doc = await transaction.get(visitRef);

          const newCount = (doc.data().count || 0) + 1;
          transaction.update(visitRef, { count: newCount });
          setTotalVisits(newCount);
        });
      } catch (error) {
        console.error("Error updating visit count:", error);
      }
    };

    incrementVisitCount();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold glass rounded-md px-2 py-1 text-center">
        Visitor Count
        <NumberCounter value={totalVisits} />
      </h1>
    </div>
  );
};

export default VisitCounter;
