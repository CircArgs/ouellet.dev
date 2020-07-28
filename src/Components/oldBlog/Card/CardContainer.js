import styled from "styled-components";

export const CardContainer = styled.div`
  cursor: pointer;
  margin-bottom: 6rem;
  border-radius: 10px;
  padding: 10px;
  transition: 0.2s;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  :hover {
    background-color: #f5f5f5;
    box-shadow: 0 20px 40px rgb(255, 123, 0);
  }
`;
