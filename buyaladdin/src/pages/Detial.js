import React from "react";
import { useLocation } from "react-router-dom";

function Detial() {
  const location = useLocation();
  console.log(location.state);
  return <div>Detial</div>;
}

export default Detial;
