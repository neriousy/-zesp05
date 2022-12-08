import React from 'react';
import styles from './Perks.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faMessage, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

function Perks(){
  return(
    <section id="perks" className={styles.perksContainer}>
      <div className={styles.perk}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faMap} />
        </div>

        <div className={styles.desc}>
          Znajdź współlokatora w każdym mieście
        </div>

      </div>

      <div className={styles.perk}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faHouseUser} />
        </div>

        <div className={styles.desc}>
          Przeglądaj oferty mieszkań z całej polski
        </div>

      </div>

      <div className={styles.perk}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>

        <div className={styles.desc}>
          Podziel się swoją opinią z resztą
        </div>

      </div>

      <div className={styles.perk}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faMessage} />
        </div>

        <div className={styles.desc}>
          Rozmawiaj z innymi użytkownikami
        </div>

      </div>

    </section>
  );
}

export default Perks;