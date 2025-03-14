import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. if there is NO authenticated user navigate to `/login`
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  // 3. While loading show a spinner
  if (isLoading) return <Spinner type="full" />;

  // 4. if there IS authencticated user render the page
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
