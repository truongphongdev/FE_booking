import LayoutAll from "../../pages/LayoutLogin/LayoutAll";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("../signup");
  };

  return (
    <LayoutAll>
      {/* Tiêu đề */}
      <h2 className="text-center text-primary mb-4">ĐĂNG NHẬP</h2>
      <form>
        {/* email/username */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <input type="text" className="form-control" placeholder="Email hoặc Tên đăng nhập" />
        </div>

        {/* mật khẩu */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="bi bi-lock"></i>
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Mật khẩu"
          />
        </div>

        {/* ghi nhớ và quên mật khẩu */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Ghi nhớ
            </label>
          </div>
          <Link to="/forgot-password" className="text-decoration-none">
            Quên mật khẩu?
          </Link>
        </div>

        {/* nút đăng nhập */}
        <button
          type="submit"
          className="btn w-100 text-white mb-3"
          style={{
            background: "linear-gradient(135deg, #00aaff 0%, #ffffff 100%)",
            border: "none",
          }}
        >
          ĐĂNG NHẬP
        </button>
        <hr />

        {/* nút đăng ký */}
        <button
          type="button"
          className="btn btn-info w-100 mt-3 text-white"
          onClick={handleSignUpClick}
        >
          ĐĂNG KÝ
        </button>
      </form>
    </LayoutAll>
  );
};

export default Login;
