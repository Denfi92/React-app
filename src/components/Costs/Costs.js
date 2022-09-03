import Card from "../UI/Card";
import CostList from "./CostList";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import "./Costs.css";

const Costs = (props) => {
  const [selectedYear, setSelectedyear] = useState("2022");
  const yearChangeHandler = (year) => {
    setSelectedyear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
