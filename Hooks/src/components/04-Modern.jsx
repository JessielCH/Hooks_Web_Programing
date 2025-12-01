import { useState, useTransition, useDeferredValue, useId } from 'react';

export default function Modern() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');

  // Returns a "lagging" version of the value to keep UI responsive
  const deferredInput = useDeferredValue(input);

  // Generates a unique ID for accessibility
  const id = useId();

  const handleChange = (e) => {
    const value = e.target.value;
    // Marks this state update as non-urgent
    startTransition(() => {
      setInput(value);
    });
  };

  return (
    <div>
      <h3>4. Modern Hooks (Transition, Deferred, Id)</h3>

      <label htmlFor={id}>Search (useId): </label>
      <input id={id} type="text" value={input} onChange={handleChange} />

      {isPending && <p style={{ color: 'red' }}>Loading heavy list...</p>}

      <div style={{ opacity: isPending ? 0.5 : 1 }}>
        <p>
          <strong>Immediate Value:</strong> {input}
        </p>
        <p>
          <strong>Deferred Value (useDeferredValue):</strong> {deferredInput}
        </p>

        {/* Artificially heavy list */}
        <HeavyList text={deferredInput} />
      </div>
    </div>
  );
}

function HeavyList({ text }) {
  if (!text) return null;
  const items = [];
  // Generating a large list to simulate lag
  for (let i = 0; i < 3000; i++) {
    items.push(
      <div key={i}>
        {text} - Item {i}
      </div>
    );
  }
  return (
    <div
      style={{ height: '100px', overflow: 'auto', border: '1px solid black' }}
    >
      {items}
    </div>
  );
}
