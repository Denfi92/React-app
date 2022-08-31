import Costs from "./components/Costs/Costs";
import NewCost from "./components/New Cost/NewCost";

const App = () => {
  const costs = [
    {
      id: "c1",
      date: new Date(2022, 7, 31),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      id: "c2",
      date: new Date(2022, 9, 25),
      description: "MacBook",
      amount: 1254.72,
    },
    {
      id: "c3",
      date: new Date(2022, 11, 30),
      description: "Шлем",
      amount: 49.99,
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log("App component");
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
