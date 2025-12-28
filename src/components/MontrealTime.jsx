import React, { useState, useEffect } from "react";

const MontrealClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: "America/Toronto", // Montreal timezone
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTime(new Date().toLocaleTimeString("en-CA", options));
    };

    updateClock(); // initial call
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-[16px] uppercase font-[font2]">
      Montreal_ {time}
    </div>
  );
};

export default MontrealClock;
