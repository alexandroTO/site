//no ts
import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 150px;
  top: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background-color: #2f2f2f;
`;

export const Itens = styled.ul`
  margin-top: 60px;

  li {
    
    padding: 5px 0 5px 5px;
  }
  li a {
    color: #fff;
    font-size: 22px;
    
  }
  a {
    text-decoration: none;
    font-weight: 600;
    
  }
  .active {
    background-color: #194756;
    
  }
`;
