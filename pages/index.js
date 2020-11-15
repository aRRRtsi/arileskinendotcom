import styles from './Home.module.scss';
import About from './components/About';

export default function Home() {
  return (
    <div className={styles.container}>
      <About />
    </div>
  );
}
