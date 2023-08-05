import { Fragment } from "react";

function Table({ data, configTableData, keyFn }) {
  const renderedHeaders = configTableData.map((data) => {
    if (data.header) {
      return <Fragment key={data.label}>{data.header()}</Fragment>;
    }
    return <th key={data.label}>{data.label}</th>;
  });

  const renderedTableData = data.map((tableData) => {
    const renderedCells = configTableData.map((data) => {
      return (
        <td className="p-2" key={data.label}>
          {data.render(tableData)}
        </td>
      );
    });

    return (
      <tr className="border-b border-t" key={keyFn(tableData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedTableData}</tbody>
    </table>
  );
}

export default Table;
