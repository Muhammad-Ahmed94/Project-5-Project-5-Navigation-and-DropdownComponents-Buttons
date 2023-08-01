import { useState, useEffect, useRef } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import DropDownPanel from "./DropDownPanel";

function DropDown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  let divEl = useRef();

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

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
    console.log(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 cursor-pointer p-3 rounded border-b"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  const icons = (
    <span>
      {isOpen ? <BsFillArrowDownCircleFill /> : <BsFillArrowUpCircleFill />}
    </span>
  );

  return (
    <div ref={divEl} className="w-48 relative">
      <DropDownPanel
        className="flex justify-between items-center cursor-pointer p-1"
        onClick={handleSelectClick}
      >
        {value?.label || "Select..."}
        {icons}
      </DropDownPanel>
      {isOpen && (
        <DropDownPanel className="absolute top-full">
          {renderedOptions}
        </DropDownPanel>
      )}
    </div>
  );
}

export default DropDown;
