import LayoutAll from "../../pages/LayoutLogin/LayoutAll";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../../services/userService";

const Login = () => {
  let navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("../signup");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Ngăn reload trang

    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }
    try {
      const res = await loginUser(email, password);

      console.log(res.data);
      if (res && +res.data.EC === 0) {
        toast.success("Login successful!");
        navigate("../../home");
      } else {
        toast.error(res.data.EM || "Login failed!");
      }
    } catch (err) {
      toast.error("Server error. Please try again later.");
      console.error(err);
    }
  };

  const handleKeyDown = (event) => {
    if (event.code === "Enter" && event.charCode === 13) {
      handleLogin();
    }
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
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          onClick={handleLogin}
          onKeyDown={(event) => handleKeyDown(event)}
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
