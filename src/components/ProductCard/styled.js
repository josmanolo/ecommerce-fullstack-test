import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const Info = styled.div`
  margin-top: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const Price = styled.p`
  font-size: 1rem;
  color: #007bff;
`;

export const AddButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
