import { useState, useEffect, useRef } from 'react';

export default function Basics() {
  // 1. useState: Standard counter
  const [count, setCount] = useState(0);

  // 2. useRef: Reference to a DOM element (does not trigger re-renders)
  const inputRef = useRef(null);

  // 3. useEffect: Runs on mount and whenever 'count' changes
  useEffect(() => {
    console.log(`Effect executed. Current count: ${count}`);
    document.title = `Count: ${count}`;
  }, [count]);
  const handleFocus = () => {
    // Direct DOM manipulation
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>1. Basic Hooks (State, Effect, Ref)</h3>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <input ref={inputRef} type="text" placeholder="Input with Ref" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
