import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center my-3 border border-gray-300 divide-x divide-gray-300 w-fit">
      <button
        onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
        className="p-4 text-light font-bold text-xl"
      >
        -
      </button>
      <div className="p-4 text-light font-bold text-xl">{count}</div>
      <button
        className="p-4 text-light font-bold text-xl"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
