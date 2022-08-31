import Costs from "./components/Costs/Costs";
import NewCost from "./components/New Cost/NewCost";

const App = () => {
  const costs = [
    {
      date: new Date(2022, 7, 31),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2022, 9, 25),
      description: "MacBook",
      amount: 1254.72,
    },
    {
      date: new Date(2022, 11, 30),
      description: "Шлем",
      amount: 49.99,
    },
  ];

  return (
    <div>
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
