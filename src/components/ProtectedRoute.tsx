import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component }: { component: React.FC }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedRoute;
