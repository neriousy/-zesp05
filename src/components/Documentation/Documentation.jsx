import React from 'react';
import styles from './Documentation.module.scss';

function Documentation(){
  return(
    <section id="documentation" className={styles.docContainer}>
      <h3 className={styles.docHeader}>
        Dokumentacja
      </h3>

      <a href ="" className={styles.downloadLink}>Dokumentacja</a>
    </section>
  );
}

export default Documentation;