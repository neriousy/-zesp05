import React from 'react';
import styles from './Objective.module.scss';
import arrowImg from '../../assets/arrow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Objective(){
  return(
    <section id="objective" className={styles.objectiveContainer}>
      <h3>Założenia projektowe</h3>

      <div className={styles.flexRow}>
        <img src={arrowImg} alt="arrow-target"/>

        <div className={styles.desc}>
          Celem naszego zespołu jest stworzenie aplikacji do szukania współlokatorów
          w każdym mieście w Polsce. Aplikacja będzie posiadać stronę webową oraz aplikacje mobilną.

          <div className={styles.objectiveList}>
            <h5>Nasze główne cele: </h5>

            <ul>
              <li>
                <FontAwesomeIcon icon={faArrowRight}/>Stworzenie strony internetowej
              </li>

              <li>
                <FontAwesomeIcon icon={faArrowRight}/>Stworzenie aplikacji mobilnej
              </li>

              <li>
                <FontAwesomeIcon icon={faArrowRight}/>Stworzenie bazy danych
              </li>

              <li>
                <FontAwesomeIcon icon={faArrowRight}/>Integracja bazy danych z aplikacją
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Objective;