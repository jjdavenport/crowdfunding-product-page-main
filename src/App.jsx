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
  const [backers, setBackers] = useState(5007);
  const [items, setItems] = useState({
    item1: 101,
    item2: 64,
  });

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
    setBackers(backers + 1);
    setItems((prev) => ({
      ...prev,
      [selected]: prev[selected] - 1,
    }));
  };

  const reset = () => {
    setComplete(false);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 bg-darkGray bg-opacity-10 pb-10 font-custom text-base">
        <Nav complete={complete} select={select} desktop={media} />
        <MasterCraft
          desktop={media}
          selected={selected}
          onSelect={onSelect}
          onClick={toggle}
        />
        <Backed backers={backers} value={value} />
        <About items={items} onClick={onSelect} />
        {select && (
          <Select
            items={items}
            desktop={media}
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
