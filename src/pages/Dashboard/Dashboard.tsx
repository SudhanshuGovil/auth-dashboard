import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authentication";
import { AppDispatch } from "../../store";
import { selectIsAuthenticated } from "../../features/authentication/authentication.selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleLogout = () => dispatch(logout());

  return (
    <section className="container mx-auto">
      <div className="flex items-center h-screen">
        <div className="bg-white text-center mx-auto p-5 border rounded-xl">
          <div className="text-3xl mb-4">Welcome!!</div>
          <div className="mb-4">This the the Authenticated Dashboard</div>
          <button
            onClick={handleLogout}
            className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border border-white rounded-lg p-2 min-w-28"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
