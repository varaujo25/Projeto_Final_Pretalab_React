import styles from './Home.module.css';
import BannerProjetoFinalReactPretaLab from '../../assets/BannerProjetoFinalReactPretaLab.png';
import TWO_BLACK_POWER from '../../assets/TWO_BLACK_POWER.png';
import Future from '../../assets/Future.png';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [dataAtual, setDataAtual] = useState('');

  useEffect(() => {
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    setDataAtual(dataAtual);
  }, []);
  
  return (
    <>
      <div className={styles.header}>
        <img src={BannerProjetoFinalReactPretaLab} alt="Banner do Projeto Final React Pretalab" />
      </div>
      <div className={styles.data}>
        <h2 style={{ color: 'blue' }}> Data : {dataAtual} </h2>
      </div>
      <div className={styles.subtitulo}>
        <p style={{ color: 'blue' }}>
          Projeto final do módulo de React do Ciclo formativo Básico da Pretalab.
          <br/>
          <a class="link-formacao" href="https://www.canva.com/design/DAF7MCKi7jE/C1i7JzmO1Nn8sRqTpQttuA/view" target="_blank" style={{ color: 'blue' }}>Proposta do projeto com os requisitos obrigatórios e opcionais.</a>
        </p>
      </div>
      <div className={styles.razao}>
        <section className={styles.content}>
          <div className={styles.cardsContainer}>
            <h2 className={styles.tituloCards} style={{ color: 'blue' }}>Porque iniciei os estudos no Pretalab</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img className={styles.imagemCard} src={TWO_BLACK_POWER} alt="Apoio" />
                <div className={styles.textos}>
                  <h3 className={styles.subtituloCard} style={{ color: 'blue' }}>Apoio</h3>
                  <p className={styles.texto} style={{ color: 'blue' }}>Buscando novos desafios em uma nova área de trabalho</p>
                </div>
              </div>
              <div className={styles.card}>
                <img className={styles.imagemCard} src={Future} alt="Carreira" />
                <div className={styles.textos}>
                  <h3 className={styles.subtituloCard} style={{ color: 'blue' }}>Carreira</h3>
                  <p className={styles.texto} style={{ color: 'blue' }}>Em transição de carreira, buscando novos conhecimentos em programação.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
