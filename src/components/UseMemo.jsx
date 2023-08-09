import { useMemo, useState } from "react";
import { initialItems } from "./MemoUtils";

export default function UseMeme() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count, items]
  );

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>UseMemo Hook</h1>
        <p>Count: {count}</p>
        <p>Selected Item: {selectedItem?.id}</p>
        <button onClick={handleCount}>Increment</button>
      </div>
    </>
  );
}
