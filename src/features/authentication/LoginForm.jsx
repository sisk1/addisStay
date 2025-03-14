import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("sisaykewiti.dev@gmail.com");
  const [password, setPassword] = useState("12345678");

  const { isLoggingIn, login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login({ email, password });
  }

  return (
    <Form type="login" onSubmit={handleSubmit}>
      <FormRow label="Email address" type="vertical">
        <Input
          type="text"
          size="wide"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>

      <FormRow label="Password" type="vertical">
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>

      <div>
        <Button variation="wide" size="large" disabled={isLoggingIn}>
          {isLoggingIn ? <SpinnerMini /> : "Log in"}
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
