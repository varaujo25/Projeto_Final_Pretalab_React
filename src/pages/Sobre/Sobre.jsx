import from formacao '../../assets/formacao.jpeg'
import styles from './sobre.module.css'

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Ciclo Formativo Pretalab
        </h1>
        <div>
            <img src={agenda} alt="agenda" />
        </div>
      </div>

      <div className={styles.containerSobre} >
          <h1 className={styles.nomeCompleto}>Vanessa de Araujo</h1>
          <h2 className={styles.profissao}>Desafios</h2>
          <p className={styles.sobreMim}>
          Transformando sonhos em realidade através da coragem de seguir uma nova trajetória profissional, redefinindo limites e inspirando outros a abraçarem a mudança.
          </p>
      </div>

      <div className={styles.subtitulo}>
        <img src={cicloImg} />
        <p>
        Conteúdo aplicado durante o processo de aprendizagem.
        </p>
      </div>

      <div className={styles.containerVideo}>
        <iframe width="560" height="315" src="https://www.youtube.com/watch?v=YKJ7kgkIMwM

" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        <div className={styles.tituloSobre}>
        Explore os conteúdos da Pretalab, onde cada módulo é uma jornada de descoberta, aprendizado e crescimento no universo do desenvolvimento, capacitando mulheres negras programadoras a alcançarem novos patamares
        </div>
      </div>
    </>
  )
}

export default Sobre;