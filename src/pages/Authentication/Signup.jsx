import { CadastroCard } from "./AuthtenticationStyled.jsx";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../schema/signupSchema.js";
import { signup } from "../../services/userService.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  async function inHandleSubimit(data) {
    try {
      const response = await signup(data);
      Cookies.set("token", response.data.token, { expires: 1 });
      console.log(response);
      navigate("/feed");
    } catch (error) {
      console.error(error);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  return (
    <CadastroCard>
      <form onSubmit={handleSubmit(inHandleSubimit)}>
        <h2>Create an Account</h2>
        <Input
          type="text"
          name="name"
          placeholder="Your complet name"
          required
          register={register}
        />
        {errors.name && <p>{errors.name.message}</p>}
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
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          required
          register={register}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <Button type="submit" text="Register" />
      </form>
    </CadastroCard>
  );
}
