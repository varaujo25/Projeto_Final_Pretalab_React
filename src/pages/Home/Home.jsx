import styles from './home.module.css';
import bannerImg from './assets/banner.jpeg';
import formacaoImg from '../../assets/formacaoimg.jpeg';
import experienciaImg from '../../assets/experiencia.jpeg';
import vagasImg from '../../assets/vagas.svg';

const Home = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>
          Bem-vindo ao Portfolio de Vanessa de Araujo!
        </h1>
        <img src={bannerImg} alt="Banner" />
      </div>
      <div className={styles.subtitulo}>
        <p>Você está prestes a explorar o projeto desenvolvido por Vanessa de Araujo, uma estudante do Ciclo Formativo Básico da Pretalab. Este site representa o aprendizado adquirido do módulo de React, como uma demonstração do conhecimento, habilidades e paixão de Vanessa pelo desenvolvimento web.

Cada linha de código é o resultado de dedicação, criatividade e a busca constante pela excelência técnica. Desde aplicações web interativas até experiências cativantes de usuário, cada item deste portfólio é uma janela para o mundo de Vanessa de Araujo.

Explore à vontade e descubra como Vanessa utiliza o React para criar soluções envolventes e funcionais. Seja bem-vindo(a) a este universo de inovação e inspiração!
        </p>
      </div>
      <div className={styles.beneficios}>
        <section className={styles.content}>
          <div className={styles.cardsContainer}>
            <h2 className={styles.tituloCards}>Razões para se tornar uma pessoa desenvolvedora</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img className={styles.imagemCard} src={vagasImg} alt="Vagas" />
                <div className={styles.textos}>
                  <h3 className={styles.subtituloCard}>Formação</h3>
                  <p className={styles.texto}>Formada em Gestão de Pessoas na e MBA em Gestão Empresarial. Participou de cursos e programas de capacitação, incluindo Gestão Financeira e Inteligência Emocional pelo Sebrae, além de obter certificações em Costura e Modelagem pelo Senai.</p>
                </div>
              </div>
              <div className={styles.card}>
                <img className={styles.imagemCard} src={experienciaImg} alt="Experiência Profissional" />
                <div className={styles.textos}>
                  <h3 className={styles.subtituloCard}>Experiência Profissional</h3>
                  <p className={styles.texto}>Profissional experiente com mais de uma década de atuação na área de cobrança, onde desempenhou papéis de supervisora e relacionamento de cobrança sênior. Além disso, é empreendedora do Ateliê Sonhos de Lulu, onde liderou o desenvolvimento, produção e vendas de produtos de enxoval. Sua trajetória profissional demonstra habilidades de gestão, relacionamento com clientes e capacidade empreendedora.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
