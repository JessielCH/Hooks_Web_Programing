import { useState, useMemo, useCallback, memo } from 'react';

export default function Performance() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // 1. useMemo: Simulates a heavy calculation. Only re-runs if 'count' changes.
  const heavyCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);

  // 2. useCallback: Memoizes the function definition to prevent child re-renders
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h3>3. Performance Hooks (Memo, Callback)</h3>
      <p>Heavy Calculation Result (Memo): {heavyCalculation}</p>

      <p>Type something (triggers render, but NOT the heavy calculation):</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <hr />
      {/* Memoized button component */}
      <ChildButton onIncrement={increment} />
    </div>
  );
}

// Memoized component: Only re-renders if props change
const ChildButton = memo(({ onIncrement }) => {
  console.log('Rendering ChildButton');
  return <button onClick={onIncrement}>Increment Counter (Callback)</button>;
});
