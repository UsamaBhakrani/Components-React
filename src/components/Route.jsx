import useNavigationContext from "../hooks/NavigationContextHook";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigationContext();

  if (path === currentPath) {
    return children;
  }
  return null;
};

export default Route;
