import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../App.css";
import Activity from "./Activity";
import AddActivity from "./AddActivity";

const Workout = () => {
  const allActivities = useSelector((state) => state.activities);
  const [add, setAdd] = useState(false);

  return (
    <div className={"workouts-wrapper"}>
      <h2>My Workout</h2>
      <button onClick={() => setAdd(!add)}>Add Activity</button>
      {add && <AddActivity />}
      {allActivities.map((activity) => {
        return (
          <Activity
            id={activity.id}
            name={activity.name}
            duration={activity.duration}
          />
        );
      })}
    </div>
  );
};

export default Workout;
