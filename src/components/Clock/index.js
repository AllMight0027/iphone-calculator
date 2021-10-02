import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      if (time !== new Date()) setTime(new Date());
    }, 1000);
  });
  return (
    <div className="time">
      {time
        .getHours()
        .toString()
        .padStart(2, "0")}
      :
      {time
        .getMinutes()
        .toString()
        .padStart(2, "0")}
    </div>
  );
};

export default Clock;
