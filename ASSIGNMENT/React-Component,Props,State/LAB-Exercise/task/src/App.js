import React from "react";
import Hello from "./Task1/Hello";
import Welcome from "./Task2/Welcome";
import Maincompo from "./Task3/Maincompo";
import Render from "./Task3/Render";
import Maincard from "./Task4/Maincard";
import Count from "./Task4/Count";



function App() {
  return (
    <div>
      {/* Task-1 */}
    <Hello />

    {/* Task-2 */}
    <Welcome />

    {/* Task-3 */}
    <Maincompo />
    <Render />

    {/* Task-4 */}
    <Maincard />
    <Count />
    </div>
  );
}

export default App;
