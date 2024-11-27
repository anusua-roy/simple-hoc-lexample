import { useEffect } from "react";

const withLogger = (Component, name) => {
  return (props) => {
    useEffect(() => {
      console.log(`Rendering component ${name}...`);
    });
    return <Component {...props} />;
  };
};

export default withLogger;
