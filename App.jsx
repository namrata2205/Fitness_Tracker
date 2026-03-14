// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState } from "react";
import styles from "./Fitness.module.css";
import WorkoutList from "./WorkoutList";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");

  const addWorkout = () => {
    if (!name || !calories) return;

    setWorkouts([...workouts, { name, calories: Number(calories) }]);
    setName("");
    setCalories("");
  };

  const deleteWorkout = (index) => {
    const updated = workouts.filter((_, i) => i !== index);
    setWorkouts(updated);
  };

  return (
    <div className={styles.container}>
      <h1>Creative Fitness Tracker</h1>

      <div className={styles.box}>
        <h2>Add Workout</h2>

        <input
          type="text"
          placeholder="Workout Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />

        <button onClick={addWorkout}>Add Workout</button>
      </div>

      <WorkoutList
        workouts={workouts}
        deleteWorkout={deleteWorkout}
      />
    </div>
  );
}

export default App;
