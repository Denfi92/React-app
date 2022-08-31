import "./CostForm.css";

const CostForm = () => {
  return (
    <form>
      <div className="mew-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" min="2022-08-31" step="2023-12-31" />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
