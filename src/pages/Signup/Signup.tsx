import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import AuthForm, { AuthFormFields } from "../../components/AuthForm/AuthForm";
import { signup } from "../../features/authentication/authentication.asyncActions";
import { selectIsAuthenticated } from "../../features/authentication/authentication.selectors";
import { useEffect } from "react";

const Signup = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  const handleSubmit = (values: AuthFormFields) =>
    dispatch(signup(values)).then((res) => {
      const { error } = res.payload;
      if (error) alert(error);
    });

  return (
    <section className="container mx-auto">
      <div className="flex items-center h-screen">
        <AuthForm handleSubmit={handleSubmit} isLogIn={false} />
      </div>
    </section>
  );
};

export default Signup;
