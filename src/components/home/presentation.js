import { useEffect, useLayoutEffect, useState } from 'react';
import styles from '../styles/main.module.scss';

const Presentation = () => {
  const [text, setText] = useState('');
  const originalText1 = "Hola! soy Mateo Gomez Osio.";
  const originalText2 = "Ingeniero de sistemas y programador";

  useLayoutEffect(() => {
    let index1 = 0;
    let index2 = 0;

    const intervalId = setInterval(() => {
      setText(prevText => {
        if (index1 < originalText1.length) {
          index1++;
          return originalText1.substring(0, index1) + (index1 < originalText1.length ? '' : '\n') + originalText2.substring(0, index2);
        } else if (index2 < originalText2.length) {
          index2++;
          return originalText1 + '\n' + originalText2.substring(0, index2);
        } else {
          clearInterval(intervalId);
          return prevText;
        }
      });
    }, 100); // Intervalo de tiempo entre letras

    return () => clearInterval(intervalId);
  }, []); // Se ejecutará solo una vez al montar el componente

  return (
    <div className={`${styles.initial}`} id='init'>
      <div>
        <h1>{text}</h1>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Presentation;
