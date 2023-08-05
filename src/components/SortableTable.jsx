import { useState } from "react";
import Table from "./Table";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { configTableData, data } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = configTableData.find(
      (column) => column.label === sortBy
    );
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }
  const updatedConfig = configTableData.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-300"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} configTableData={updatedConfig} />;
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <FiChevronUp />
        <FiChevronDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <FiChevronUp />
        <FiChevronDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <FiChevronUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <FiChevronDown />
      </div>
    );
  }
}

export default SortableTable;
