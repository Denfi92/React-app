import CostItem from "./CostItem";
import "./CostList.css";

const CostList = (porps) => {
  if (porps.costs.length === 0) {
    return <h2 className="cost-list__falback">В этом году расходов нет</h2>;
  }

  return (
    <ul className="cost-list">
      {porps.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;
