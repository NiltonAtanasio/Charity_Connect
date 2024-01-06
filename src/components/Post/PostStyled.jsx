import styled from "styled-components";

export const PostStyled = styled.div`
  height: auto;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  padding: 15px 15px;
  width: 550px;
  border-radius: 10px;

  .post__info {
    width: 50%;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h3 {
    cursor: pointer;
  }

  .post__conf {
    width: 50%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .post__text {
    width: 100%;
    height: auto;
    padding: 10px 10px;
    text-align: left;
  }

  .post__text p {
    margin: 0;
  }

  .post__image {
    width: 100%;
    border: 2px solid #d9d9d9;
    height: 300px;
  }

  .post__image > img {
    height: 100%;
    width: 100%;
    cursor: pointer;
  }

  .post__bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
  }

  .post__bottom > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }
`;
