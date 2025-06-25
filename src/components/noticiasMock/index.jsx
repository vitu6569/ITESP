import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import "./style/index.css";

const NoticiasMock = () => {
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const snapshot = await getDocs(collection(db, "noticias"));
        const dados = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNoticias(dados);
      } catch (error) {
        console.error("❌ Erro ao buscar notícias:", error);
      }
    };

    fetchNoticias();
  }, []);
  return (
    <section className="noticias-section">
      <h2 className="noticias-titulo">Últimas Notícias</h2>
      <div className="noticias-lista">
        {noticias.map((noticias) => (
          <a
            href= {noticias.link} 
            target="_blank"
            key={noticias.id}
            className="noticia-card"
          >
            <img
              src={noticias.ImagemURL}
              alt={noticias.titulo}
              className="noticia-img"
            />
            <div className="noticia-conteudo">
              <h3>{noticias.titulo}</h3>
              <p className="noticia-data">{noticias.data}</p>
              <p>{noticias.Subtitulo}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NoticiasMock;
