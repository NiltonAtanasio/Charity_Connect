import { InputStyled } from "./InputStyled.jsx";

export default function Input({ type, placeholder, register, name }) {
  return (
    <InputStyled type={type} placeholder={placeholder} {...register(name)} />
  );
}
