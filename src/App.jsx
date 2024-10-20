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
  const [selected, setSelected] = useState(null);
  const [complete, setComplete] = useState(false);
  const [value, setValue] = useState(89914);

  const toggle = () => {
    setSelected(null);
    setSelect(!select);
  };

  const onSelect = (i) => {
    if (!select) {
      setSelect(true);
    }
    setSelected(i);
  };

  const onComplete = (val) => {
    setValue((prevVal) => prevVal + val);
    setSelect(false);
    setComplete(true);
  };

  const reset = () => {
    setComplete(false);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 pb-10 font-custom text-base">
        <Nav desktop={media} />
        <MasterCraft
          desktop={media}
          selected={selected}
          onSelect={onSelect}
          onClick={toggle}
        />
        <Backed value={value} />
        <About onClick={onSelect} />
        {select && (
          <Select
            selected={selected}
            onComplete={onComplete}
            onSelect={onSelect}
            onClose={toggle}
          />
        )}
        {complete && <Complete onClose={reset} />}
      </div>
    </>
  );
}

export default App;
