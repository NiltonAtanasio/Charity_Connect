import { CadastroCard } from "./AuthtenticationStyled.jsx";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schema/signinSchema.js";

function inHandleSubimit(data) {
  console.log(data);
}
export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signinSchema) });
  return (
    <CadastroCard>
      <form onSubmit={handleSubmit(inHandleSubimit)}>
        <h2>Login</h2>
        <Input
          type="email"
          name="email"
          placeholder="Your e-mail"
          required
          register={register}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
          register={register}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Button type="submit" text="Login" />
      </form>
    </CadastroCard>
  );
}
