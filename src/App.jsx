import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseRef from "./components/UseRef";
import UseMeme from "./components/UseMemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <UseRef />
        <UseMeme />
      </div>
    </>
  );
}

export default App;
