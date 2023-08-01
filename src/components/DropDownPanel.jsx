import classNames from "classnames";

function DropDownPanel({ children, className, ...rest }) {
  const finalClassName = classNames(
    "border rounded shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
}

export default DropDownPanel;
