// src/components/NewsList.jsx
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import "./style/index.css"; // estilo opcional

const NewsList = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const q = query(collection(db, "noticias"), orderBy("dataPublicacao", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setNoticias(data);
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="news-container">
      {noticias.map((noticia) => (
        <div className="news-card" key={noticia.id}>
          <h2>{noticia.titulo}</h2>
          {noticia.imagemURL && (
            <img
              src={noticia.imagemURL}
              alt={noticia.titulo}
              className="news-image"
            />
          )}
          <p>{noticia.conteudo}</p>
          <small>
            {new Date(noticia.dataPublicacao.seconds * 1000).toLocaleDateString()}
          </small>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
