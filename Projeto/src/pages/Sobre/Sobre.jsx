import React, { useState, useEffect } from 'react';
import Foto_perfil_Vanessa_de_Araujo from '../../assets/Mina.jpeg';
import Banner_Meu_Aprendizado from '../../assets/Banner_Meu_Aprendizado.png';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <img className={styles.headerImg} src={Foto_perfil_Ially_Silva} alt="Foto de Perfil" />
        </div>
      </div>

      <div className={styles.containerSobre}>
        <h1 className={styles.nomeCompleto}>Ially Samara da Silva</h1>
        <h2 className={styles.profissao}>Engenheira de Dados</h2>
        <p className={styles.sobreMim}>
         Mulher preimport React, { useState, useEffect } from 'react';
         import Foto_perfil_Ially_Silva from '../../assets/Foto_perfil_Ially_Silva.png';
         import Banner_Meu_Aprendizado from '../../assets/Banner_Meu_Aprendizado.png';
         import styles from './Sobre.module.css';
         
         const Sobre = () => {
           return (
             <>
               <div className={styles.header}>
                 <div>
                   <img className={styles.headerImg} src={Foto_perfil_Ially_Silva} alt="Foto de Perfil" />
                 </div>
               </div>
         
               <div className={styles.containerSobre}>
                 <h1 className={styles.nomeCompleto}>Ially Samara da Silva</h1>
                 <h2 className={styles.profissao}>Engenheira de Dados</h2>
                 <p className={styles.sobreMim}>
                   Mulher preimport React, { useState, useEffect } from 'react';
                   import Foto_perfil_Ially_Silva from '../../assets/Foto_perfil_Ially_Silva.png';
                   import Banner_Meu_Aprendizado from '../../assets/Banner_Meu_Aprendizado.png';
                   import styles from './Sobre.module.css';
                   
                   const Sobre = () => {
                     return (
                       <>
                         <div className={styles.header}>
                           <div>
                             <img className={styles.headerImg} src={Foto_perfil_Ially_Silva} alt="Foto de Perfil" />
                           </div>
                         </div>
                   
                         <div className={styles.containerSobre}>
                           <h1 className={styles.nomeCompleto}>Ially Samara da Silva</h1>
                           <h2 className={styles.profissao}>Engenheira de Dados</h2>
                           <p className={styles.sobreMim}>
                            Mulher preta, mãe da Luisa, formada em Gestão de Pessoas, experiencia ampla na área de cobrança, empreendedora buscando novos desafios
                           </p>
                         </div>
                   
                         <div className={styles.containerAprendizado}>
                           <h2 className={styles.aprendizado}> Meu aprendizado na Formação Básica da Pretalab </h2>
                           <img className={styles.aprendizadoImg} src={Banner_Meu_Aprendizado} alt="Banner com a trilha de aprendizado no curso da PretaLab" />
                         </div>
                       </>
                     )
                   }
                   
                   export default Sobre;
                 </p>
               </div>
         
               <div className={styles.containerAprendizado}>
                 <h2 className={styles.aprendizado}> Meu aprendizado na Formação Básica da Pretalab </h2>
                 <img className={styles.aprendizadoImg} src={Banner_Meu_Aprendizado} alt="Banner com a trilha de aprendizado no curso da PretaLab" />
               </div>
             </>
           )
         }
         
         export default Sobre;
        </p>
      </div>

      <div className={styles.containerAprendizado}>
        <h2 className={styles.aprendizado}> Meu aprendizado na Formação Básica da Pretalab </h2>
        <img className={styles.aprendizadoImg} src={Banner_Meu_Aprendizado} alt="Banner com a trilha de aprendizado no curso da PretaLab" />
      </div>
    </>
  )
}

export default Sobre;