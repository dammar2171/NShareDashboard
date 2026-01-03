import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";
const Sidebar = () => {
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
            <button className="logout-btn">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
