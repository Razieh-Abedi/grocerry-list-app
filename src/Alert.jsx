import React, { useEffect } from "react";

function Alert({ msg, type, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <div className="w-75 mx-auto">
      <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  );
}

export default Alert;
