import React from "react";

function Container({ children }) {
  return (
    <div className="col-md-10 col-sm-12  row shadow-sm wrapper">{children}</div>
  );
}

export default Container;
