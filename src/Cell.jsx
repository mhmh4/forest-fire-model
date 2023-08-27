import { useState } from "react";

function Cell() {
  const [status, setStatus] = useState(0);

  function onClick() {
    setStatus((prevStatus) => prevStatus ^ 1);
  }

  return (
    <span
      className="border border-slate-500 p-4 select-none cursor-pointer hover:bg-blue-100"
      onClick={onClick}
    >
      {status}
    </span>
  );
}

export default Cell;
