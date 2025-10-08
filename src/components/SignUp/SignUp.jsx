import { Link } from "react-router-dom";
import LayoutAll from "../../pages/LayoutLogin/LayoutAll";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");

  // validate input
  const isValidInput = () => {
    // check empty fields
    if (
      !fullName ||
      !birth ||
      !gender ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword ||
      !address
    ) {
      toast.error("Please fill in all fields.");
      return false;
    }

    // check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format.");
      return false;
    }

    // check phone format
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Invalid phone number format.");
      return false;
    }

    // Password: ít nhất 8 ký tự, có ít nhất 1 chữ, 1 số, 1 ký tự đặc biệt
    const passwordRegex =
      /^(?=.*[zA-Za-])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Invalid Password format.");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }

    return true;
  };

  // handle register
  const handleRegister = (e) => {
    e.preventDefault();
    // check validate
    if (!isValidInput()) return;

    toast.success("Register successfully!");
    let userData = {
      fullName: fullName,
      birth: birth,
      gender: gender,
      email: email,
      phone: phone,
      password: password,
      confirmPassword: confirmPassword,
      address: address,
    };
    console.log("User Data: ", userData);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/demo").then((dataDemo) => {
      console.log("check data axios >>>>>>>", dataDemo.data);
    });
  }, []);

  return (
    <LayoutAll>
      <h2 className="text-center text-primary mb-4">SIGN UP</h2>
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="row mb-3">
          {/* Ngày sinh */}
          <div className="col-md-7 mb-2 mb-md-0">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-calendar-event"></i>
              </span>
              <input
                type="date"
                className="form-control"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
              />
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
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
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
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
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
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* phone */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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

        {/* confirm password */}
        <div className="mb-3 input-group">
          <span className="input-group-text">
            <i className="bi bi-lock"></i>
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
          onClick={handleRegister}
        >
          REGISTER
        </button>

        <hr />

        <Link to="../login" className="btn btn-info w-100 mt-3 text-white">
          BACK TO LOGIN
        </Link>
      </form>
    </LayoutAll>
  );
};

export default SignUp;
