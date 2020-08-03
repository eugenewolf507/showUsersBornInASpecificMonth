import React from 'react';
import styles from './Legend.module.css';

const Legend = () => (
  <table className={styles.LegendTable}>
    <caption className={styles.caption}>Legend:</caption>
    <tr>
      <td className={styles.grey}>[0-2]</td>
      <td> grey</td>
    </tr>
    <tr>
      <td className={styles.blue}>[3-6]</td>
      <td> blue</td>
    </tr>
    <tr>
      <td className={styles.green}>[7-10]</td>
      <td> green</td>
    </tr>
    <tr>
      <td className={styles.red}>[11+]</td>
      <td> red</td>
    </tr>
  </table>
);

export default Legend;
