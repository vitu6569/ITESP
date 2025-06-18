import React from "react";
import { useParams } from "react-router-dom";

// Mesmo mock para buscar notícia individual
const noticiasMock = [
  {
    id: "1",
    titulo: "ITESP representa o ES em torneio nacional",
    data: "18/06/2025",
    imagemURL: "https://via.placeholder.com/600x400",
    conteudo:
      "O Instituto São Pedro participou de uma competição nacional com destaque na categoria sub-20. A equipe demonstrou garra, talento e conquistou reconhecimento nacional.",
  },
  {
    id: "2",
    titulo: "Nova turma de beach soccer inicia no bairro",
    data: "10/06/2025",
    imagemURL: "https://via.placeholder.com/600x400",
    conteudo:
      "O projeto social inicia mais uma turma para crianças entre 6 e 12 anos. As aulas acontecem na quadra de areia do bairro São Pedro, com foco na formação esportiva e cidadã.",
  },
  {
    id: "3",
    titulo: "Atleta do ITESP convocado para a Seleção Brasileira",
    data: "05/06/2025",
    imagemURL: "https://via.placeholder.com/600x400",
    conteudo:
      "Um dos destaques do São Pedro Beach Soccer foi convocado para a seleção de base, levando o nome do bairro e do instituto para o cenário internacional.",
  },
];

const NoticiaDetalhe = () => {
  const { id } = useParams();
  const noticia = noticiasMock.find((n) => n.id === id);

  if (!noticia) return <p>Notícia não encontrada.</p>;

  return (
    <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h2>{noticia.titulo}</h2>
      <p style={{ color: "#777" }}>{noticia.data}</p>
      <img src={noticia.imagemURL} alt={noticia.titulo} style={{ width: "100%", maxHeight: 400, objectFit: "cover", margin: "20px 0" }} />
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>{noticia.conteudo}</p>
    </section>
  );
};

export default NoticiaDetalhe;
