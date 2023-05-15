import tacrules from "../ruleslist";

const Terms = () => {
  return (
    <>
      <div className="card mx-2 my-2" style={{ width: "52rem" }}>
        <div className="card-body">
          <h5 className="card-title my-3 mb-3">Terms and Condition</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Please read terms and condition before submitting
          </h6>
          {tacrules.map((e) => (
            <p className="card-text my-3">
              <i class="bi bi-arrow-right-square-fill px-2"></i>
              {e.p}
            </p>
          ))}
          <div className="mb-3 form-check d-flex flex-row-reverse">
            <h6> I agree to terms and condition </h6>
            <input
              type="checkbox"
              className="form-check-input mx-2"
              id="exampleCheck1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
