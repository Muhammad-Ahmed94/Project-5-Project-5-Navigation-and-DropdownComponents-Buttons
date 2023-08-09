import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "DropDown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
  ];

  const renderedLink = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="ml-2 mb-4"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2 ml-3"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLink}
    </div>
  );
}

export default Sidebar;
