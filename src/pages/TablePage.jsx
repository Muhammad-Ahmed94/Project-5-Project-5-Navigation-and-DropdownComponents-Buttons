import Table from "../components/Table";

function TablePage() {
  const tableData = [
    { name: "Orange", color: "bg-orange-600", rating: 7 },
    { name: "Banana", color: "bg-yellow-400", rating: 8 },
    { name: "Apple", color: "bg-red-500", rating: 9 },
    { name: "Grapes", color: "bg-green-300", rating: 5 },
  ];

  const configTableData = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`}></div>,
    },
    { label: "Score", render: (fruit) => fruit.rating },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={tableData} configTableData={configTableData} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
