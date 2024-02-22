let Item1 = () => {
  return (
    <div className="container text-center kg-button">
      <div className="row">
        <div className="col">
          <input type="text" placeholder="Enter your task" />
        </div>
        <div className="col">
          <input type="date" />
        </div>
        <div className="col">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item1;
