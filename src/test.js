const data = [
  { name: "orange", cost: 20, weight: 10 },
  { name: "banana", cost: 10, weight: 50 },
  { name: "cherry", cost: 200, weight: 60 },
];

function getSortValue(fruit) {
  return fruit.name;
}

const sortOrder = "desc";

data.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);

  const setSortOrder = sortOrder === "asc" ? 1 : -1;

  if (typeof valueA === "string") {
    return valueA.localeCompare(valueB) * setSortOrder;
  } else {
    return (valueA - valueB) * setSortOrder;
  }
});
