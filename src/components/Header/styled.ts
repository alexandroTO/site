import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: row-reverse;
  width: 70%;
  background-color: #194756;
  height: auto;
  margin-left: 150px;
  padding: 60px 20px;
  img{
    margin-right:-100px;
    margin-top:-25px;
  }
`;
export const Text = styled.div`

  p {
    width:90%;
    font-size: 18px;
    color: white;
    text-align: justify;
  }
  h1 {
    
    font-size: 32px;
    font-weight: bold;
    color: white;
    margin-bottom: 15px;
  }
`;
