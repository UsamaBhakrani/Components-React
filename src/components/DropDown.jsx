import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (listItem) => {
    onChange(listItem);
    setIsOpen(false);
  };

  const renderedList = options.map((list) => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      onClick={() => handleOptionClick(list)}
      key={list.value}
    >
      {list.label}
    </div>
  ));

  // let content = "Select...";
  // if (selection) {
  //   content = selection.label;
  // }

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleOnClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedList}</Panel>}
    </div>
  );
};

export default DropDown;
