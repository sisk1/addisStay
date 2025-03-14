import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";
import LoginContainer from "../ui/LoginContainer";

function Login() {
  return (
    <LoginContainer>
      <Logo size="large" />
      <Heading as="h2">Log in to your account</Heading>
      <LoginForm />
    </LoginContainer>
  );
}

export default Login;
