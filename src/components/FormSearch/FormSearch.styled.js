import styled from "@emotion/styled";

export const SearchCont = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FormInput = styled.input`
  color: #395e30;
  border-radius: 9999em;
  padding: 5px 10px;
  box-shadow: inset 1px 1px 3px -1px rgba(0, 0, 0, 0.6);
  border: none;
  width: 280px;
  font-size: 24px;

  &::placeholder {
    color: #cbd0d5;
    text-align: center;
  }
`;
export const Form = styled.form`
  position: relative;
`;
export const Button = styled.button`
  width: 50px;
  height: 38px;
  position: absolute;
  right: 1px;
  top: 0;
  background-color: inherit;
  border: none;
  border-left: solid 0.5px;
  border-radius: 9999em;
  padding: 0 10px;
`;
