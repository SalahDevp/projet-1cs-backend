import React from "react";
import { Button } from "@material-tailwind/react";
import { useGoogleLogin } from "@react-oauth/google";
import authenticate from "../../utils/auth/authenticate";
import { useNavigate } from "react-router-dom";

const LoginBtn = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      authenticate(codeResponse.code, navigate);
    },
    onError: (err) => console.error(err),
    flow: "auth-code",
    scope: "email",
    redirect_uri: "postmessage",
  });

  return (
    <Button
      ref={ref}
      variant="gradient"
      size="md"
      color="white"
      className="text-orange"
      onClick={login}
    >
      <span>Se Connecter</span>
    </Button>
  );
});

export default LoginBtn;
