import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greet from "./components/Greet.jsx";
import { Counter } from "./components/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greet name="Nishchal" age="37" gender="Male">
      This is children prop
    </Greet>
    <Greet name="Divya" age="33" gender="Female" />
    {/* <Counter /> */}
  </StrictMode>
);
