import * as S from "./style";


const LeftBar = () => {
  return (
    <S.Container>
      <S.Itens>
        <li className="active"><a href="#">SOBRE</a></li>
        <li><a href="#">STACK</a></li>
        <li><a href="#">CARREIRA</a></li>
        <li><a href="#">PROJETOS</a></li>
        <li><a href="#">EXEMPLOS</a></li>
        <li><a href="#">CONTATO</a></li>
      </S.Itens>
    </S.Container>
  );
};
export default LeftBar;
