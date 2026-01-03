import { FiMail, FiLock } from "react-icons/fi";
import "../css/AdminLogin.css";

const AdminLogin = () => {
  return (
    <section className="admin-login">
      <div className="login-card">
        <h2>Admin Login</h2>
        <p>Sign in to manage NShare dashboard</p>

        <form>
          <div className="input-group">
            <FiMail />
            <input type="email" placeholder="Admin Email" required />
          </div>

          <div className="input-group">
            <FiLock />
            <input type="password" placeholder="Password" required />
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
