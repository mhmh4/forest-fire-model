import { useState } from "react";

function Cell({ i, j }) {
  const [status, setStatus] = useState(0);

  function onClick() {
    setStatus((prevStatus) => prevStatus ^ 1);
  }

  return (
    <div
      className="border border-slate-500 w-[30px] h-[30px] select-none cursor-pointer hover:bg-blue-100 inline-block"
      onClick={onClick}
    >
      {status}
    </div>
  );
}

export default Cell;
