import React, { useEffect, useState } from "react";

const Clock = (props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    props.onTimeUpdate(time)
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(props.deadline), 1000);

    return () => getTimeUntil(props.deadline);
  }, [props.deadline]);

  return (
    <div className="dongle lg:text-9xl md:text-8xl text-6xl">
      <span className="Clock-days">{leading0(days)} : </span>
      <span className="Clock-hours">{leading0(hours)} : </span>
      <span className="Clock-minutes">{leading0(minutes)} : </span>
      <span className="Clock-seconds">{leading0(seconds)} </span>
    </div>
  );
};

export default Clock;
