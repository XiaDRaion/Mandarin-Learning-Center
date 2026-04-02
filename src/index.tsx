import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import ChooseUs from "./pages/ChooseUs";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <ChooseUs />
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
