import admin from "../assets/profile.png";
import "../css/Header.css"
const Header = () => {
  return (
    <header>
      <div className="logo">NShare</div>
      <div className="admin-image d-flex flex-column">
        <img src={admin} alt="" />
        <h3>Dammar Bhatt</h3>
      </div>
    </header>
  );
};
export default Header;
