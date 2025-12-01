import { useState, useOptimistic, useRef } from "react";

// Mocking a slow API
async function sendMessageAPI(message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

export default function Experimental() {
  // The "source of truth" state
  const [messages, setMessages] = useState([]);

  // useOptimistic: (currentState, optimisticUpdater)
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { text: newMessage, sending: true }]
  );

  const formRef = useRef();

  const formAction = async (formData) => {
    const text = formData.get("message");

    // 1. Optimistic Update (Immediate UI feedback)
    addOptimisticMessage(text);
    formRef.current.reset();

    // 2. Real Request
    const response = await sendMessageAPI(text);

    // 3. Sync with real state
    setMessages((prev) => [...prev, { text: response, sending: false }]);
  };

  return (
    <div>
      <h3>5. Experimental React 19 (useOptimistic)</h3>
      <p>
        Send a message. It appears gray (optimistic) then black (confirmed).
      </p>

      <form action={formAction} ref={formRef}>
        <input type="text" name="message" required />
        <button type="submit">Send</button>
      </form>

      <ul>
        {optimisticMessages.map((msg, index) => (
          <li key={index} style={{ color: msg.sending ? "gray" : "black" }}>
            {msg.text} {msg.sending && "(Sending...)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
