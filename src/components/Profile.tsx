// Styles
import styles from '../styles/components/Profile.module.css';

export default function Profile(): JSX.Element {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/adonaipinheiro.png" alt="Adonai Pinheiro" />
      <div>
        <strong>Adonai Pinheiro</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
