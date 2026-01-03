import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreContextProvider from "./store/Store";
import AdminLayout from "./components/AdminLayout";
import Overview from "./pages/Overview";
import Notes from "./pages/Notes";
import Quiz from "./pages/Quiz";
import Notice from "./pages/Notice";
import Setting from "./pages/Setting";
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <StoreContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="notes" element={<Notes />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="notice" element={<Notice />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </Router>
    </StoreContextProvider>
  );
}

export default App;
