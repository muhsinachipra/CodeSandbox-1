import { useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterDisplay from "./counterContext/CounterDisplay";
import CounterIncrement from "./counterContext/CounterIncrement";
import { CounterProvider } from "./counterContext/CounterContext";

export default function App() {
  return (
    <CounterProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CounterDisplay />} />
          <Route path="/increment" element={<CounterIncrement />} />
        </Routes>
      </Router>
    </CounterProvider>
  );
}
