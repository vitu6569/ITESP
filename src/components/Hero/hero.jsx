import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Swiper, SwiperSlide } from 'swiper/react';
import DefaultButton from "../Buttons/defaultButton";
import 'swiper/css';
import './style/index.css';
import '../../style/index.css';

export default function HeroSlider() {
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
    <div className="hero-swiper">
      <Swiper slidesPerView={1}>
        {noticias.slice(0, 3).map((noticias) => (
          <SwiperSlide key={noticias.id} className="slide">
            <div target="_blank" rel="noopener noreferrer">
              <img src={noticias.ImagemURL} alt={noticias.titulo} className="slide-img" />
              <div className="slide-overlay">
                <div className="slide-content">
                  <h1>{noticias.titulo}</h1>
                  <p className="subtitulo text cinzaClaroQuente">{noticias.Subtitulo}</p>
                  <DefaultButton className="slide-button" link={noticias.link} style="Yellow" title="Saiba mais" target="blank"/>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
