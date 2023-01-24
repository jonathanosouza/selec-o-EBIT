import styled from "styled-components";
import filme1 from "../../assets/maeumapeca.jpg";

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 450px;
  // padding: 1rem;
  left: 0px;
  top: 0px;
  background: ${(props) => props.theme["gray-800"]};
  opacity: 0.9;
  border-radius: 6px 36px;

  img {
    width: 13rem;
  }

  h1 {
    margin-top: -2rem;
    font-size: 8px;
  }

  > p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1rem;
    color: ${(props) => props.theme["gray-400"]};
  }

  Button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100px;
    height: 30px;

    span {
      display: flex;
      margin-top: -1px;
      padding: 5px;

      color: ${(props) => props.theme["gray-100"]};
    }
  }

  span {
    color: ${(props) => props.theme["white"]};
    text-align: center;
    font-size: 12px;
    margin-top: 10px;
  }
`;
export const Tags = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 2rem;
  border-radius: 2rem;
  width: 79px;
  height: 18px;
  margin-top: 2rem;

  p {
    font-size: 10px;
    font-weight: 800;
    font-family: "Roboto";
  }
`;
export const TagContainer = styled.div`
  display: flex;
  gap: 3px;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 13px;

  h3 {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  img {
    width: 20px;
  }

  div {
    display: flex;
  }

  span {
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  /* flex-direction: column; */
`;

export const ModalHomeContainer = styled.div`
  display: flex;
  gap: 2rem;

  h1 {
    margin-top: 10px;
    margin-left: 5%;
    color: ${(props) => props.theme["white"]};
  }

  h4 {
    font-size: 17px;
    margin-left: 5%;

    color: ${(props) => props.theme["gray-400"]};
    text-align: justify;
  }

  span {
    color: ${(props) => props.theme["gray-400"]};
  }

  video {
    display: flex;
    width: 1000px;
    padding-top: 2rem;
  }
`;
