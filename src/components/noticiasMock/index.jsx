import React from "react";
import { Link } from "react-router-dom";
import "./style/index.css"; // você pode personalizar esse CSS

const noticiasMock = [
  {
    id: 1,
    titulo: "ITESP representa o ES em torneio nacional",
    data: "18/06/2025",
    imagemURL: "https://via.placeholder.com/600x400",
    conteudo:
      "O Instituto São Pedro participou de uma competição nacional com destaque na categoria sub-20. A equipe demonstrou garra, talento e conquistou reconhecimento nacional.",
  },
  {
    id: 2,
    titulo: "Nova turma de beach soccer inicia no bairro",
    data: "10/06/2025",
    imagemURL: "https://via.placeholder.com/600x400",
    conteudo:
      "O projeto social inicia mais uma turma para crianças entre 6 e 12 anos. As aulas acontecem na quadra de areia do bairro São Pedro, com foco na formação esportiva e cidadã.",
  },
  {
    id: 3,
    titulo: "Atleta do ITESP convocado para a Seleção Brasileira",
    data: "05/06/2025",
    imagemURL: "https://via.placeholder.com/600x400",
    conteudo:
      "Um dos destaques do São Pedro Beach Soccer foi convocado para a seleção de base, levando o nome do bairro e do instituto para o cenário internacional.",
  },
];

const NoticiasMock = () => {
  return (
    <section className="noticias-section">
      <h2 className="noticias-titulo">Últimas Notícias</h2>
      <div className="noticias-lista">
        {noticiasMock.map((noticia) => (
          <Link
            to={`/noticia/${noticia.id}`}
            key={noticia.id}
            className="noticia-card"
          >
            <img src={noticia.imagemURL} alt={noticia.titulo} className="noticia-img" />
            <div className="noticia-conteudo">
              <h3>{noticia.titulo}</h3>
              <p className="noticia-data">{noticia.data}</p>
              <p>{noticia.conteudo}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NoticiasMock;
