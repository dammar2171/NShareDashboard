import Sidebar from "./Sidebar";
import "../css/AdminLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
function AdminLayout() {
  return (
    <>
      <Header />
      <main>
        <div className="layout-container">
          <div className="sidebar-left">
            <Sidebar />
          </div>
          <div className="content-right">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AdminLayout;
