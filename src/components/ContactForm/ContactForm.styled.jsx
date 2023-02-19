import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  border: 1px dashed #676767;
  border-radius: 5px;
`;

export const InputLabel = styled.label`
  font-size: 20px;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const InputField = styled.input`
  margin-top: 5px;
  border: 1px dashed #676767;
  border-radius: 5px;
  padding: 5px;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border: 1px solid #4fe7f5;
    outline: none;
  }
`;

export const AddButton = styled.button`
  margin-top: 20px;
  padding: 5px;
  width: 150px;
  align-self: center;
  background-color: #a5f7ff;
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