import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import getUser from "../axios/getUser";

/**
 * used to protect routes
 * --redirect user to landing page if not authenticated--
 */
export default function useCheckAuthentication() {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const userId = localStorage.getItem("userId");
    getUser(userId)
      .then((user) => {
        if (!user.nom.length || !user.telephone.length || !user.adresse.length)
          //user authenticated but hasn't filled his info
          navigate("/");
      })
      .catch((e) => {
        //user not authenticated
        console.error(e);
        navigate("/");
      });
  }, []);
}
