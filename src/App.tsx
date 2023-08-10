import { useContext } from "react";
import './App.css';
import { BulbContext } from "./contexts/UserContext";

export function App() {
  const context = useContext(BulbContext);

  if (!context) {
    return (
      <div>O contexto ainda não existe!</div>
    );
  }

  const { bulb, toggleBulb } = context

  return (
    <div>
      <h1>A luz está: {bulb}</h1><br/>
      <button onClick={toggleBulb}>Interruptor</button>
    </div>
  )  
}