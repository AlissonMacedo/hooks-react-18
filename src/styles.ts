import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  span {
    font-size: 16px;
    font-family: 'Roboto';
    margin-bottom: 10px;
    align-self: center;
  }
`;


export const Components = styled.div`
  display: flex;
  flex-direction: row;
`;


export const Products = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  margin: 0 20px;

  >span {
    align-self: flex-end;
    margin-bottom: 3px;
    margin-top: 10px;
  }

  input {
    width: 100%;
    padding: 12px 20px;
    margin-bottom: 14px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
`

export const Product = styled.div`
  border: solid 1px #ddd;
  border-radius: 5px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 5px;
  margin-bottom: 7px;

  align-self: center;
  font-family: 'Roboto';
  font-weight: 400;
  
`