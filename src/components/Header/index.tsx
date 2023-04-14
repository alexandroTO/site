import * as S from "./styled";

const Header = () => {
  return (
    <S.Content>
        <img src="img/1554733938721.jpg" width={200} height={200}/>
        <S.Text>
        <h1>Alexandro Tiago de Oliveira</h1>
      <p>
        Sou um desenvolvedor web com formação em Ciências da Computação e
        especialização em Engenharia de Software. Tenho experiência em
        programação web e atualmente trabalho em uma software house de uma
        instituição de ensino, onde desenvolvo e faço a manutenção de sites e
        sistemas institucionais.
      </p>

      <p>
        Minhas habilidades incluem programação em JavaScript, PHP, Python e
        Java, além de trabalhar com bancos de dados e aplicativos móveis. Busco
        sempre me manter atualizado em relação às novas tecnologias e tendências
        do mercado para proporcionar a melhor experiência aos usuários.
      </p>

      <p>
        Estou sempre em busca de novos desafios e oportunidades para aplicar
        meus conhecimentos em projetos web e contribuir para o sucesso das
        empresas em que atuo
      </p>
        </S.Text>
      
    </S.Content>
  );
};
export default Header;
