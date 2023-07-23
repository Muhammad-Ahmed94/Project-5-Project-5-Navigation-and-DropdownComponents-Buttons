import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-600 text-white": primary,
      "border-gray-400 bg-gray-800 text-white": secondary,
      "border-green-300 bg-green-700 text-white": success,
      "border-yellow-200 bg-yellow-800 text-white": warning,
      "border-red-700 bg-red-900 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-800": outline && primary,
      "text-gray-800": outline && secondary,
      "text-green-800": outline && success,
      "text-yellow-800": outline && warning,
      "text-red-800": outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  buttonVariationChecker: ({
    primary,
    secondary,
    success,
    warning,
    danger,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      throw new Error("only one of the button variation is allowed at a time");
    }
  },
};
export default Button;
