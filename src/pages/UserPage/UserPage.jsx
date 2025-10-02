import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <div>
      <div
        className="container mt-5 p-4 border rounded border-primary shadow-sm"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="text-center text-primary mb-4">Thông tin User</h2>
        <form>
          {/* full name */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
          </div>

          <div className="row mb-3">
            {/* Ngày sinh */}
            <div className="col-md-7 mb-2 mb-md-0">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-calendar-event"></i>
                </span>
                <input type="date" className="form-control" />
              </div>
            </div>

            {/* Giới tính */}
            <div className="col-md-5 d-flex align-items-center justify-content-between px-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                />
                <label className="form-check-label" htmlFor="male">
                  Nam
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                />
                <label className="form-check-label" htmlFor="female">
                  Nữ
                </label>
              </div>
            </div>
          </div>
          {/* email */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope"></i>
            </span>
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          {/* phone */}
          <div className="mb-3 input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input type="text" className="form-control" placeholder="Phone" />
          </div>

          {/* address */}
          <div className="mb-3 input-group ">
            <span className="input-group-text">
              <i className="bi bi-house"></i>
            </span>
            <textarea
              class="form-control"
              id="address"
              name="address"
              rows="4"
              placeholder="Address"
            ></textarea>
          </div>

          {/* register */}
          <button
            type="button"
            className="btn btn-success w-100 mt-3 text-white mb-3"
            style={{
              background: "linear-gradient(135deg, #00aaff 0%, #ffffff 100%)",
              border: "none",
            }}
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
