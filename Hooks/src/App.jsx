import { useState } from "react";
import Basics from "./components/01-Basics";
import ContextDemo from "./components/02-Context";
import Performance from "./components/03-Performance";
import Modern from "./components/04-Modern";
import Experimental from "./components/05-Experimental";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>React Hooks Master Project</h1>
      <p>Select a category to see the hooks in action:</p>

      {/* Navigation Menu */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button onClick={() => setActiveTab(1)}>1. Basics</button>
        <button onClick={() => setActiveTab(2)}>2. Context</button>
        <button onClick={() => setActiveTab(3)}>3. Performance</button>
        <button onClick={() => setActiveTab(4)}>4. Modern</button>
        <button onClick={() => setActiveTab(5)}>5. Experimental (R19)</button>
      </div>

      <hr />

      {/* Conditional Rendering */}
      <div style={{ marginTop: "20px" }}>
        {activeTab === 1 && <Basics />}
        {activeTab === 2 && <ContextDemo />}
        {activeTab === 3 && <Performance />}
        {activeTab === 4 && <Modern />}
        {activeTab === 5 && <Experimental />}
      </div>
    </div>
  );
}

export default App;
