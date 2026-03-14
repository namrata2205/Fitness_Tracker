import React from "react";
import styles from "./Fitness.module.css";

const WorkoutCard = ({ workout, index, deleteWorkout }) => {
  return (
    <li className={styles.itemBox}>
      <p>
        {workout.name} - {workout.calories} cal
      </p>

      <button
        className={styles.deleteBottom}
        onClick={() => deleteWorkout(index)}
      >
        Delete
      </button>
    </li>
  );
};

export default WorkoutCard;
