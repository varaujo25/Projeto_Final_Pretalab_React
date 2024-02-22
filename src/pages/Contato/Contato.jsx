import React, { useState } from 'react'; // Adicionado React
import agendaImg from '../../assets/agenda.svg'; // Corrigido o nome da imagem importada
import styles from './Contato.module.css';

function Contato() {
  const [mensagem, setMensagem] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value);
  }

  function handleInputValueNome(event) {
    setNome(event.target.value);
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value);
  }

  function handleCreateMessage(event) {
    event.preventDefault();

    const messageData = {
      textMessage: mensagem,
      email: email,
      nome: nome,
    };

    setMensagem('');
    setNome('');
    setEmail('');
  }

  return (
    <>
      <div className={styles.header}>
        <h1>
          Entre em contato
        </h1>
        <img src={agendaImg} alt="Imagem Contato" /> {/* Corrigido o nome da imagem */}
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleCreateMessage} className={styles.form}>
          <input className={styles.formInput} placeholder="Digite seu nome" onChange={handleInputValueNome} value={nome} />
          <input className={styles.formInput} placeholder="Digite seu email" onChange={handleInputValueEmail} value={email} />
          <textarea className={styles.formTextArea} placeholder="Digite sua mensagem" onChange={handleInputValueMensagem} value={mensagem} />
          <button className={styles.formButton} type="submit">Enviar mensagem</button>
        </form>
      </div>
    </>
  );
}

export default Contato;
