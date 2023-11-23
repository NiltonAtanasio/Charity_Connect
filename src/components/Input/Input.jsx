import { InputStyled } from "./InputStyled.jsx";

export default function Input({ type, placeholder, register }) {
  return (
    <InputStyled type={type} placeholder={placeholder} register={register} />
  );
}
