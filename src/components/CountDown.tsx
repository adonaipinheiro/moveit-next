import { useEffect, useState } from 'react';

// Styles
import styles from '../styles/components/CountDown.module.css';

export default function CountDown(): JSX.Element {
  const [time, setTime] = useState<number>(25 * 60);
  const [active, setActive] = useState<boolean>(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startAndPauseCountDown(): void {
    setActive((active) => !active);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button type="button" className={styles.countDownButton} onClick={startAndPauseCountDown}>
        Iniciar um ciclo
      </button>
    </div>
  );
}
