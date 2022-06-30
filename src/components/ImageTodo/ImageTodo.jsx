import React from "react";
import styled from "styled-components";

const TodoWrapper = styled.div`
  height: 400px;
  width: 400px;
  border: 2px solid red;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  img {
    max-width: 300px;
  }
`;

function ImageTodo({ text, image }) {
  return (
    <TodoWrapper onClick={console.log("dogs")}>
      <h3>{text}</h3>
      <img src={image} alt={text} />
    </TodoWrapper>
  );
}

export default ImageTodo;
