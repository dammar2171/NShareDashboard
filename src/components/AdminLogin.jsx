import { FiMail, FiLock } from "react-icons/fi";
import "../css/AdminLogin.css";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../store/Store";

const AdminLogin = () => {
  const { setAuthenticated } = useContext(StoreContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);

    try {
      const response = await axios.post(
        "http://localhost:5000/admin/loginAdmin",
        {
          email,
          password,
        }
      );
      if (!response) {
        return alert("logged in failed");
      }
      localStorage.setItem("token", response.data.token);
      setAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.log("Login_Error:", error);
    }
  };
  return (
    <section className="admin-login">
      <div className="login-card">
        <h2>Admin Login</h2>
        <p>Sign in to manage NShare dashboard</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FiMail />
            <input
              type="email"
              ref={emailRef}
              placeholder="Admin Email"
              required
            />
          </div>

          <div className="input-group">
            <FiLock />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <small className="login-footer">© 2026 NShare Admin Panel</small>
      </div>
    </section>
  );
};

export default AdminLogin;
