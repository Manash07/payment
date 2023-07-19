
const Profile = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "58rem" }}>
        <div className="card-body ">
          <h5 className="card-title"> Your KYC Details</h5>
          <div className="row mt-3">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="text-center">
                <img
                  src="/Avatar.jpg"
                  className="rounded"
                  style={{ height: "10rem" }}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder=""
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
