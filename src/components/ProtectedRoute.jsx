import { useContext } from "react";
import { StoreContext } from "../store/Store";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { authenticated } = useContext(StoreContext);

  if (!authenticated) <Navigate to="/login" replace />;
  return <>{children}</>;
}

export default ProtectedRoute;
