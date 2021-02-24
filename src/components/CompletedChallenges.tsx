// Styles
import styles from '../styles/components/CompletedChallenges.module.css';

export default function CompletedChallenges(): JSX.Element {
  return (
    <div className={styles.container}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}
