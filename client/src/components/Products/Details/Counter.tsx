import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center w-fit">
      <button
        onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
        className="text-light font-bold h-7 w-7 text-lg focus-visible:ring-0 border rounded-full bg-gray-800"
      >
        -
      </button>
      <div className="p-4 text-light font-bold text-xl">{count}</div>
      <button
        className="border rounded-full h-7 w-7 text-light font-bold text-lg bg-gray-800"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
