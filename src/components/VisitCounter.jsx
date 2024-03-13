import React, { useEffect, useState } from "react";

const VisitCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
    setVisits(storedVisits + 1);
  }, []);

  useEffect(() => {
    localStorage.setItem("visitCounter", visits);
  }, [visits]);

  return (
    <div>
      <p>{visits}</p>
    </div>
  );
};

export default VisitCounter;
