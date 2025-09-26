import LayoutAll from "../../pages/LayoutLogin/LayoutAll";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("../signup");
  };

  return (
    <LayoutAll>
      {/* right */}
      <h2 className="text-center text-primary mb-4">USER LOGIN</h2>
      <form>
        {/* email/username */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <input type="text" className="form-control" placeholder="Email" />
        </div>

        {/* password */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="bi bi-lock"></i>
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        {/* remember me and forgot password */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Remember
            </label>
          </div>
          <Link to="/forgot-password" className="text-decoration-none">
            Forgot password?
          </Link>
        </div>

        {/* login */}
        <button
          type="submit"
          className="btn w-100 text-white mb-3"
          style={{
            background: "linear-gradient(135deg, #00aaff 0%, #ffffff 100%)",
            border: "none",
          }}
        >
          LOGIN
        </button>
        <hr />

        {/* sign up */}
        <button
          type="button"
          className="btn btn-info w-100 mt-3 text-white"
          onClick={handleSignUpClick}
        >
          SIGN UP
        </button>
      </form>
    </LayoutAll>
  );
};

export default Login;
