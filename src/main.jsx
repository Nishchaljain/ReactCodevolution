import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greet from "./components/Greet.jsx";
import { Counter } from "./components/Counter.jsx";
import { FunctionClick } from "./components/FunctionClick.jsx";
import ParentComponent from "./components/ParentComponent.jsx";
import UserGreeting from "./components/UserGreeting.jsx";
import NameList from "./components/NameList.jsx";
import StyleSheets from "./components/StyleSheets.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Greet name="Nishchal" age="37" gender="Male">
      This is children prop
    </Greet>
    <Greet name="Divya" age="33" gender="Female" /> */}
    {/* <Counter /> */}
    {/* <FunctionClick /> */}
    {/* <ParentComponent /> */}
    {/* <UserGreeting /> */}
    {/* <NameList /> */}
    <StyleSheets primary={true} />
  </StrictMode>
);
