import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../features/authentication/authentication.selectors";

type RestrictedProps = {
  children: ReactNode;
};

const Restricted = ({ children }: RestrictedProps) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <>
      {isAuthenticated ? <>{children}</> : <Navigate to="/" replace={true} />}
    </>
  );
};

export default Restricted;
