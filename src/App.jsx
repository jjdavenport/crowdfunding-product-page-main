import Nav from "./components/nav";
import MasterCraft from "./components/mastercraft";
import Backed from "./components/backed";
import About from "./components/about";
import { useState } from "react";
import Select from "./components/select";
import Complete from "./components/complete";

function App() {
  const [select, setSelect] = useState(false);
  const [complete, setComplete] = useState(false);
  const toggle = () => setSelect(!select);
  const selected = () => {
    setSelect(false);
    setComplete(true);
  };
  const Completed = () => setComplete(false);
  return (
    <>
      <Nav />
      <MasterCraft onClick={toggle} />
      <Backed />
      <About />
      {select && <Select onSelect={selected} onClick={toggle} />}
      {complete && <Complete onClick={Completed} />}
    </>
  );
}

export default App;
