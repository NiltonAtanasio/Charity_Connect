import styled from "styled-components";

export const AvatarStyled = styled.div`
  border-radius: 50%;
  cursor: pointer;
  width: ${(props) => (props.size === "g" ? "80px" : "50px")};
  height: ${(props) => (props.size === "g" ? "80px" : "50px")};

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
