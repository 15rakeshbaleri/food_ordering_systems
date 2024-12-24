import React from "react";
import Eventcard from "./Eventscard";
function Events() {
  return (
    <div className="mt-5 px-5 flex flex-wrap gap-5">
      {[1, 1, 1].map((item) => (
        <Eventcard />
      ))}
    </div>
  );
}

export default Events;
