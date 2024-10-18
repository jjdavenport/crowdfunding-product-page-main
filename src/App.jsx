import Nav from "./components/nav";
import MasterCraft from "./components/mastercraft";
import Backed from "./components/backed";
import About from "./components/about";
import { useState } from "react";
import Select from "./components/select";
import Complete from "./components/complete";
import { useMediaQuery } from "react-responsive";

function App() {
  const media = useMediaQuery({ minWidth: 768 });
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
      <div className="font-custom flex flex-col items-center gap-8 pb-10 text-base">
        <Nav desktop={media} />
        <MasterCraft desktop={media} onClick={toggle} />
        <Backed />
        <About />
        {select && <Select onSelect={selected} onClick={toggle} />}
        {complete && <Complete onClick={Completed} />}
      </div>
    </>
  );
}

export default App;
