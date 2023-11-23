import React from "react";

import { CadastroCard } from "./AuthtenticationStyled.jsx";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";

export default function Signup() {
  return (
    <CadastroCard>
      <form>
        <h2>Create an Account</h2>
        <Input type="text" name="name" placeholder="Your first name" required />

        <Input
          type="text"
          name="userName"
          placeholder="Your last name"
          required
        />
        <Input type="email" name="email" placeholder="Your e-mail" required />

        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
          min={6}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          required
          min={6}
        />

        <Input type="url" name="avatar" placeholder="Your avatar" required />

        <Button type="subimit" text="Register" link="login" />
      </form>
    </CadastroCard>
  );
}
