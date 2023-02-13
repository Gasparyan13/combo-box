import styled from 'styled-components';

export const Root = styled.div`
  display: block;
  width: 320px;
  border-radius: 7px;
  position: relative;
  transition: background 0.3s ease;
`;

export const FormControl = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  input {
    border-radius: 5px;
    width: 100%;
    padding: 15px 20px;
    border: 1px solid #949480;
    outline: none;
  }

  label {
    font-size: 14px;
    color: #000000;
    padding: 10px 20px 10px 15px;
    font-weight: bold;
  }
`;

export const Input = styled.input``;

export const Item = styled.div`
  padding: 10px;

  &:hover {
    background-color: rgb(231, 239, 243);
  }
`;

export const FormOption = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  box-sizing: border-box;
  z-index: 999;
  cursor: pointer;
  border: 1px solid #949598;
  width: 100%;
  max-height: 200px;
  overflow: auto;
`;
