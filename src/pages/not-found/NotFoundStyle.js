import styled from "styled-components";

export const ReturnButton = styled.span`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: #5e666e;
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
`;
