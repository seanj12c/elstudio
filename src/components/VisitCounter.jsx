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
      <div className="stat shadow">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value text-lg text-secondary">
          {" "}
          <NumberCounter value={totalVisits} />
        </div>
        <div className="stat-desc">21% more than last month</div>
      </div>
    </div>
  );
};

export default VisitCounter;
