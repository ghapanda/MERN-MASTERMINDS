import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useAuthCheck = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const publicPaths = ["/login", "/signup", "/"];
    const isPublicPath = publicPaths.includes(location.pathname);

    if (isPublicPath) {
      // If the current path is a public path, remove the token
      sessionStorage.clear();
    }
  }, [location, navigate]);
};

export default useAuthCheck;
