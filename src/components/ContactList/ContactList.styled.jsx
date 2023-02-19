import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 340px;
  color: #545454;
  font-size: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  margin-top: 10px;
  min-width: 300px;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  padding: 5px;
  width: 60px;
  background-color: #c6f7fc;
  border: 0px;
  border-radius: 5px;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    background: #4fe7f5;
    color: white;
  }
`;