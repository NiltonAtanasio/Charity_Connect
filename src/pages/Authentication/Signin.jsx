import React from "react";

import { CadastroCard } from "./AuthtenticationStyled.jsx";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";

export default function Signin() {
  return (
    <CadastroCard>
      <form>
        <h2>Login</h2>
        <Input
          type="email"
          name="email"
          className="input__email"
          placeholder="Your e-mail"
          required
        />
        <Input
          type="password"
          name="password"
          className="input__password"
          placeholder="Password"
          required
          min={6}
        />
        <Button type="submit" text="Login" link="/feed" />
      </form>
    </CadastroCard>
  );
}
