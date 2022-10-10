import React, { useEffect } from "react";

function Alert({ msg, type, removeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="">
      <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  );
}

export default Alert;
