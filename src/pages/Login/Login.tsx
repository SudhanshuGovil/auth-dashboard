import { useDispatch, useSelector } from "react-redux";
import { AuthForm } from "../../components";
import { AuthFormFields } from "../../components/AuthForm/AuthForm";
import { login } from "../../features/authentication/authentication.asyncActions";
import { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { selectIsAuthenticated } from "../../features/authentication/authentication.selectors";
import { useEffect } from "react";

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  const handleSubmit = (values: AuthFormFields) =>
    dispatch(login(values)).then((res) => {
      const { error } = res.payload;
      if (error) alert(error);
    });

  return (
    <section className="container mx-auto">
      <div className="flex items-center h-screen">
        <AuthForm handleSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default Login;
