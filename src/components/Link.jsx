import React from "react";
import classNames from "classnames";
import useNavigationContext from "../hooks/NavigationContextHook";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigationContext();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (e) => {
    if (e.ctrlKey === true) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
