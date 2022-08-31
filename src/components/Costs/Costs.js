import Card from "../UI/Card";
import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import "./Costs.css";

const Costs = (props) => {
  const [selectedYear, setSelectedyear] = useState("2022");
  const yearChangeHandler = (year) => {
    setSelectedyear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        />
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        />
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        />
      </Card>
    </div>
  );
};

export default Costs;
