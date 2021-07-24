import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddActivity = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    duration: "",
  });

  const handleChange = (e) => {
    e.persist();
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const AddActivity = () => {
    dispatch({
      type: "CREATE_ACTIVITY",
      payload: {
        id: uuidv4(),
        name: data.name,
        duration: data.duration,
      },
    });
  };

  return (
    <div className={"add"}>
      <div className="input-section">
        <p>Activity:</p>
        <input
          onChange={(e) => handleChange(e)}
          name={"name"}
          placeholder={"activity"}
        />
      </div>
      <div className="input-section">
        <p>Duration:</p>
        <input
          onChange={(e) => handleChange(e)}
          name={"duration"}
          placeholder={"time"}
        />
      </div>
      <button onClick={AddActivity}>Add Activity</button>
    </div>
  );
};

export default AddActivity;
