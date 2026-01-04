import { NavLink, useNavigate } from "react-router-dom";
import "../css/Sidebar.css";
import { useContext } from "react";
import { StoreContext } from "../store/Store";
const Sidebar = () => {
  const { setAuthenticated } = useContext(StoreContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-link">
        <ul>
          <li>
            <NavLink to="/">OverView</NavLink>
          </li>
          <li>
            <NavLink to="/notes">Notes</NavLink>
          </li>
          <li>
            <NavLink to="/quiz">Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/notice">Notice</NavLink>
          </li>
          <li>
            <NavLink to="/setting">Setting</NavLink>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
