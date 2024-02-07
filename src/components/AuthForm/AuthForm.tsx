import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthFormProps = {
  handleSubmit: (arg: AuthFormFields) => any;
  isLogIn?: boolean;
};

export type AuthFormFields = {
  email: string;
  password: string;
};

const AuthForm = ({ handleSubmit, isLogIn = true }: AuthFormProps) => {
  const navigate = useNavigate();
  const [fields, setFields] = useState<AuthFormFields>({
    email: "",
    password: "",
  });

  const handleChange = (e: any, name: string) =>
    setFields({ ...fields, [name]: e.target.value });

  const handleNavigation = () => navigate(isLogIn ? "/signup" : "/");

  const onSubmitClick = () => {
    handleSubmit(fields);
    setFields({ email: "", password: "" });
  };

  const isDisabled = !Boolean(fields.email && fields.password);

  return (
    <div className="bg-white p-5 mx-auto border border-white rounded-xl lg:w-1/3">
      <div className="text-2xl text-center">
        {isLogIn ? "Login" : "Sign Up"}
      </div>
      <form className="mt-8">
        <div className="flex flex-col gap-1 mb-4">
          <label id="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Type your email"
            onChange={(e) => handleChange(e, "email")}
            className="border-b border-gray-300 pb-1 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1 mb-8">
          <label id="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Type your password"
            onChange={(e) => handleChange(e, "password")}
            className="border-b border-gray-300 pb-1 focus:outline-none"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={onSubmitClick}
            disabled={isDisabled}
            className={classNames(
              "text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border border-white rounded-lg p-2 min-w-28",
              {
                "cursor-not-allowed opacity-80": isDisabled,
              }
            )}
          >
            {isLogIn ? "LOGIN" : "SIGNUP"}
          </button>
        </div>
      </form>
      <div className="mt-8 text-center">
        <div>{isLogIn ? "Or Sign Up Using" : "Or Log In Using"}</div>
        <button
          type="button"
          onClick={handleNavigation}
          className="text-gray-600"
        >
          {isLogIn ? "SIGN UP" : "LOGIN"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
