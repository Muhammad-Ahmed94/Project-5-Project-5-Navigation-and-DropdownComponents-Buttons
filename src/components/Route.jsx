import useNavigation from "../hooks/use-Navigation";

function Route({ children, path }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
