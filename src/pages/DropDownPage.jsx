import { useState } from "react";
import DropDown from "../components/DropDown";

function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <DropDown options={options} onChange={handleSelection} value={selection} />
  );
}

export default DropDownPage;
