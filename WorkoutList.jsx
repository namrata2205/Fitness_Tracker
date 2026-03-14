import React from "react";
import WorkoutCard from "./WorkoutCard";
import styles from "./Fitness.module.css";

const WorkoutList = ({ workouts, deleteWorkout }) => {
  const totalCalories = workouts.reduce(
    (sum, w) => sum + w.calories,
    0
  );

  return (
    <div className={styles.box}>
      <h2>Workout List</h2>

      {workouts.length === 0 ? (
        <p>No workouts added</p>
      ) : (
        <ul className={styles.list}>
          {workouts.map((w, i) => (
            <WorkoutCard
              key={i}
              workout={w}
              index={i}
              deleteWorkout={deleteWorkout}
            />
          ))}
        </ul>
      )}

      <h3>Total Calories: {totalCalories}</h3>

      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${(totalCalories / 500) * 100}%` }}
        ></div>
      </div>

      <p>Daily Goal: 500 calories</p>
    </div>
  );
};

export default WorkoutList;
