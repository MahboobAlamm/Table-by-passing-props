import "./styles.css";
import Child from "./Child";

export default function App() {
  const student = [
    {
      name: "Mahboob",
      reg: "12003881",
      roll: 21
    },
    {
      name: "Faisal",
      reg: "12005382",
      roll: 6
    },
    {
      name: "Aditya",
      reg: "12003441",
      roll: 55
    }
  ];
  return (
    <div className="App">
      <h1>Table Using Props </h1>
      <Child student={student} />
    </div>
  );
}
