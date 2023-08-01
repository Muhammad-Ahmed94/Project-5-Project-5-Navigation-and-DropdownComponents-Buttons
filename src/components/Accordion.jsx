import { useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState();

  const handleClick = (index, event) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpandedIndex = index === expandedIndex;

    const icons = (
      <span className="text-xl">
        {isExpandedIndex ? (
          <BsFillArrowUpCircleFill />
        ) : (
          <BsFillArrowDownCircleFill />
        )}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="p-3 bg-gray-300 border-b flex items-center justify-between cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icons}
        </div>
        {isExpandedIndex && (
          <div className="p-3 border-b border-gray-300 bg-gray-100">
            {item.content}
          </div>
        )}
      </div>
    );
  });

  return <div className="border rounded">{renderedItems}</div>;
}

export default Accordion;
